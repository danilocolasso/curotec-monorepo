<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = Project::factory(10)->create();
        $tags = Tag::inRandomOrder()->limit(10)->get();

        $projects->each(function ($project) use ($tags) {
            $project->tags()->attach(
                $tags->random(rand(1, 5))->pluck('id')->toArray()
            );

            $contributors = User::WhereNot('id', $project->user_id)->inRandomOrder()->limit(5)->get();
            $project->contributors()->attach($contributors);
        });
    }
}
