<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'description' => $this->description,
            'tags' => $this->tags->pluck('name'),
            'contributors' => $this->contributors->map(fn($contributor) => $contributor->only(['name', 'email'])),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
