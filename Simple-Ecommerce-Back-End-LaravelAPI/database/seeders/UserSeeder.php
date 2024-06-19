<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Création d'un utilisateur avec le modèle User
        User::create([
            'name' => 'client',
            'email' => 'nouvelle_adresse@example.com', // Utilisez une adresse e-mail différente
            'password' => Hash::make('motdepasse'),
        ]);
    }
}