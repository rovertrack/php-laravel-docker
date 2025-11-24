<?php

use Database\Seeders\app2;
use \Database\seeds\app1;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(app2::class);
        // $this->call(UsersTableSeeder::class);
    }
}
