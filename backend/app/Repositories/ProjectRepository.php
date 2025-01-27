<?php

namespace App\Repositories;

use App\Models\Project;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Pagination\LengthAwarePaginator;

class ProjectRepository
{
    public function paginate(array $parameters): LengthAwarePaginator
    {
        $filters = [
            'query' => $parameters['query'] ?? null,
        ];

        $sort = $parameters['sort'] ?? 'id';
        $order = $parameters['order'] ?? 'asc';
        $currentPage = $parameters['current_page'] ?? 1;
        $perPage = $parameters['per_page'] ?? 10;

        $query = Project::query();
        $query->where('user_id', auth()->id());

        if ($filters['query']) {
            $query->where(function ($query) use ($filters) {
                $query->where('title', 'ilike', "%{$filters['query']}%")
                    ->orWhere('description', 'ilike', "%{$filters['query']}%")
                    ->orWhereHas('tags', fn($query) => $query->where('name', 'ilike', "%{$filters['query']}%"));
            });
        }

        $query->orderBy($sort, $order);

        return $query->paginate($perPage, ['*'], 'page', $currentPage);
    }


    public function create(array $data): Project
    {
        $data['user_id'] = auth()->id();

        $project = Project::create($data);

        if (array_key_exists('tags', $data)) {
            $this->attachTags($project, $data['tags']);
        }

        return $project;
    }

    public function update(Project $project, array $data): Project
    {
        unset($data['user_id']);

        $project->update($data);

        return $project;
    }


    public function addContributor(Project $project, string $email): void
    {
        $user = User::where('email', $email)->firstOrFail();

        $project->contributors()->attach($user);
    }

    public function removeContributor(Project $project, User $contributor): void
    {
        $project->contributors()->detach($contributor);
    }

    private function attachTags(Project $project, array $tags): void
    {
        $existingTags = Tag::whereIn('name', $tags)->get();
        $newTags = collect($tags)->diff($existingTags->pluck('name'));
        $tags = $existingTags->merge($newTags->map(fn($tag) => Tag::create(['name' => $tag])));

        $project->tags()->attach($tags);
    }
}
