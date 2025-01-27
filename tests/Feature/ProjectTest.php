<?php

use App\Models\Project;
use App\Models\Tag;
use App\Models\User;

beforeEach(function () {
    $this->user = User::factory()->create();
    $this->project = Project::factory()->create(['user_id' => $this->user->id]);
    $this->actingAs($this->user);
});

test('authorized users can view any projects', function () {
    $response = $this->getJson(route('projects.index'));

    $response
        ->assertOk()
        ->assertJsonFragment(['current_page' => 1]);
});


test('user can filter projects by title', function () {
    $response = $this->getJson(route('projects.index', ['query' => $this->project->title]));

    $response
        ->assertOk()
        ->assertJsonFragment(['title' => $this->project->title]);
});

test('user can filter by project tags', function () {
    $tag = Tag::factory()->create(['name' => 'tag1']);
    $this->project->tags()->attach($tag);

    $response = $this->getJson(route('projects.index', ['query' => $tag->name]));

    $response
        ->assertOk()
        ->assertJsonFragment(['title' => $this->project->title]);
});

test('fails validation when creating a project with invalid data', function () {
    $response = $this->postJson(route('projects.store'), []);

    $response
        ->assertUnprocessable()
        ->assertJsonValidationErrors(['title']);
});

test('can create a project with valid data', function () {
    $data = [
        'title' => 'Test Project',
        'description' => 'This is a test.',
    ];

    $response = $this->postJson(route('projects.store'), $data);

    $response
        ->assertCreated()
        ->assertJsonFragment(['title' => $data['title']]);
});

test('project owner can update a project', function () {
    $data = [
        'title' => 'Updated Project',
        'description' => 'This is an updated test.',
    ];

    $response = $this->putJson(route('projects.update', $this->project->id), $data);

    $response
        ->assertOk()
        ->assertJsonFragment(['title' => $data['title']]);
});

test('only the project owner can update a project', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->putJson(route('projects.update', $this->project->id), [
        'title' => 'Updated Project',
        'description' => 'This is an updated test.',
    ]);

    $response->assertForbidden();
});

test('the project owner can add contributors', function () {
    $user = User::factory()->create();

    $response = $this->postJson(
        route('projects.add-contributor', $this->project->id),
        ['email' => $user->email]
    );

    $response->assertNoContent();
});

test('only the project owner can add contributors', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->postJson(
        route('projects.add-contributor', $this->project->id),
        ['email' => $user->email]
    );

    $response->assertForbidden();
});

test('the project owner can remove contributors', function () {
    $contributor = User::factory()->create();
    $this->project->contributors()->attach($contributor);

    $response = $this->deleteJson(
        route('projects.remove-contributor', [$this->project->id, $contributor->id])
    );

    $response->assertNoContent();
});

test('only the project owner can remove contributors', function () {
    $contributor = User::factory()->create();
    $this->project->contributors()->attach($contributor);

    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->deleteJson(
        route('projects.remove-contributor', [$this->project->id, $contributor->id])
    );

    $response->assertForbidden();
});

test('contributor can self-remove from a project', function () {
    $contributor = User::factory()->create();
    $this->project->contributors()->attach($contributor);

    $this->actingAs($contributor);

    $response = $this->deleteJson(
        route('projects.remove-contributor', [$this->project->id, $contributor->id])
    );

    $response->assertNoContent();
});

test('project owner can delete a project', function () {
    $response = $this->deleteJson(route('projects.destroy', $this->project->id));

    $response->assertNoContent();
});

test('non-owner cannot delete a project', function () {
    $this->actingAs(User::factory()->create());

    $response = $this->deleteJson(route('projects.destroy', $this->project->id));

    $response->assertForbidden();
});
