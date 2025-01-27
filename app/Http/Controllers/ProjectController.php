<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddContributorRequest;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectListResource;
use App\Models\Project;
use App\Models\User;
use App\Repositories\ProjectRepository;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response as ResponseStatus;

class ProjectController extends Controller
{
    public function __construct(
        private readonly ProjectRepository $projectRepository
    )
    {
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Gate::authorize('viewAny', Project::class);

        $data = request()->all();
        $projects = $this->projectRepository->paginate($data);

        return $projects;

        return ProjectListResource::collection($projects);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $data = $request->validated();
        $project = $this->projectRepository->create($data);

        return response()->json($project)->setStatusCode(ResponseStatus::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        Gate::authorize('view', $project);

        return response()->json($project);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        Gate::authorize('update', $project);

        return response()->json($project);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();
        $project = $this->projectRepository->update($project, $data);

        return response()->json($project);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project): Response
    {
        Gate::authorize('delete', $project);

        $project->delete();

        return response()->noContent();
    }


    public function addContributor(AddContributorRequest $request, Project $project): Response
    {
        $data = $request->validated();
        $this->projectRepository->addContributor($project, $data['email']);

        return response()->noContent();
    }

    public function removeContributor(Project $project, User $contributor): Response
    {
        Gate::authorize('removeContributor', $project);

        $this->projectRepository->removeContributor($project, $contributor);

        return response()->noContent();
    }
}
