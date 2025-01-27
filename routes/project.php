<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::resource('projects', ProjectController::class);

Route::post('projects/{project}/contributor', [ProjectController::class, 'addContributor'])
    ->name('projects.add-contributor');

Route::delete('projects/{project}/contributor/{contributor}', [ProjectController::class, 'removeContributor'])
    ->name('projects.remove-contributor');
