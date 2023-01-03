<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
    Schema::create('credit__cards', function (Blueprint $table) {
      $table->id();
      $table->string('name');
      $table->unsignedBigInteger('user_id');
      $table->string('cc_number');
      $table->date('expiration_date');
      $table->integer('cvv');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::disableForeignKeyConstraints();
    Schema::dropIfExists('credit__cards');
    Schema::enableForeignKeyConstraints();
  }
};
