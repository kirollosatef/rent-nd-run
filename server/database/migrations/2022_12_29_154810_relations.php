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
    Schema::table('users', function (Blueprint $table) {
      $table->foreign('role_id')->references('id')->on('roles');
    });

    Schema::table('credit__cards', function (Blueprint $table) {
      $table->foreign('user_id')->references('id')->on('users');
    });

    Schema::table('orders', function (Blueprint $table) {
      $table->foreign('user_id')->references('id')->on('users');
      $table->foreign('product_id')->references('id')->on('products');
    });

    Schema::table('products', function (Blueprint $table) {
      $table->foreign('user_id')->references('id')->on('users');
      $table->foreign('category_id')->references('id')->on('categories');
    });

    Schema::table('wishlists', function (Blueprint $table) {
      $table->foreign('user_id')->references('id')->on('users');
      $table->foreign('product_id')->references('id')->on('products');
    });

    Schema::table('carts', function (Blueprint $table) {
      $table->foreign('user_id')->references('id')->on('users');
      $table->foreign('product_id')->references('id')->on('products');
    });

    Schema::table('reviews', function (Blueprint $table) {
      $table->foreign('user_id')->references('id')->on('users');
      $table->foreign('product_id')->references('id')->on('products');
    });

    Schema::table('vendor__ratings', function (Blueprint $table) {
      $table->foreign('user_id')->references('id')->on('users');
      $table->foreign('vendor_id')->references('id')->on('users');
    });

    Schema::table('delivery__ratings', function (Blueprint $table) {
      $table->foreign('user_id')->references('id')->on('users');
      $table->foreign('delivery_id')->references('id')->on('users');
    });

    Schema::table('addresses', function (Blueprint $table) {
      $table->foreign('user_id')->references('id')->on('users');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
  }
};
