<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Danilo Colasso',
            'username' => 'danilo',
            'email' => 'danilo.colasso@gmail.com',
            'password' => bcrypt('password'),
        ]);

        User::factory()->count(20)->create();
    }
}
