<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
  public function run()
  {
    User::table('users')->insert([
      'name' => 'John Doe',
      'email' => 'john@example.com',
      'password' => Hash::make('password'),
      'image' => '',
      'phone_number' => '1234567890',
      'approved' => 1,
      'role_id' => 1,
      'created_at' => now(),
      'updated_at' => now()
    ]);
  }
}
