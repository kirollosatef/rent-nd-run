<?php

use App\Models\Role;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('roles', function (Blueprint $table) {
      $table->id();
      $table->string('name');
      $table->timestamps();
    });
    // insert some roles : ['customer', 'vendor', 'delivery', 'askingToBeVendor', 'askingToBeDelivery', 'admin']
    DB::table('roles')->insert(
      [
        ['name' => 'customer'],
        ['name' => 'vendor'],
        ['name' => 'delivery'],
        ['name' => 'askingToBeVendor'],
        ['name' => 'askingToBeDelivery'],
        ['name' => 'admin'],
      ]
    );
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::disableForeignKeyConstraints();
    Schema::dropIfExists('roles');
    Schema::enableForeignKeyConstraints();
  }
};
