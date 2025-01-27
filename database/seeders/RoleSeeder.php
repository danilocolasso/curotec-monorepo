<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Role as RoleEnum;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        Permission::create(['name' => 'create project']);
        Permission::create(['name' => 'view project']);
        Permission::create(['name' => 'edit project']);
        Permission::create(['name' => 'delete project']);

        Project::all()->each(function ($project) {
            $roleOwner = Role::create(['name' => RoleEnum::OWNER->value, 'team_id' => $project->id]);
            $roleOwner->givePermissionTo(Permission::all());

            $roleContributor = Role::create(['name' => RoleEnum::CONTRIBUTOR->value, 'team_id' => $project->id]);
            $roleContributor->givePermissionTo(['view project', 'edit project']);
        });
    }
}
