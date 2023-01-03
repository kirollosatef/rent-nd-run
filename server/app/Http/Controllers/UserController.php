<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $users = User::all();
    return response($users);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create(Request $request)
  {
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'name' => 'required|max:255',
      'email' => 'required|email|unique:users|max:255',
      'password' => 'required|min:6',
      'image' => 'required|url',
      'phone_number' => 'max:20',
      'approved' => 'boolean',
      'role_id' => 'exists:roles,id',
    ]);

    if ($validator->fails()) {
      return response()->json(['error' => $validator->errors()], 422);
    }

    $user = User::create([
      'name' => $request->name,
      'email' => $request->email,
      'password' => bcrypt($request->password),
      'image' => $request->image,
      'phone_number' => $request->phone_number,
      'approved' => $request->approved,
      'role_id' => $request->role_id,
    ]);

    return response()->json($user, 201);
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show(User $user)
  {
    return response()->json($user);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, User $user)
  {
    $validator = Validator::make($request->all(), [
      'name' => 'max:255',
      'email' => 'email|unique:users|max:255',
      'password' => 'min:6',
      'image' => 'url',
      'phone_number' => 'max:20',
      'approved' => 'boolean',
      'role_id' => 'exists:roles,id',
    ]);

    if ($validator->fails()) {
      return response()->json(['error' => $validator->errors()], 422);
    }

    if ($request->has('name')) {
      $user->name = $request->name;
    }
    if ($request->has('email')) {
      $user->email = $request->email;
    }
    if ($request->has('password')) {
      $user->password = bcrypt($request->password);
    }
    if ($request->has('image')) {
      $user->image = $request->image;
    }
    if ($request->has('phone_number')) {
      $user->phone_number = $request->phone_number;
    }
    if ($request->has('approved')) {
      $user->approved = $request->approved;
    }
    if ($request->has('role_id')) {
      $user->role_id = $request->role_id;
    }

    $user->save();

    return response()->json($user);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(User $user)
  {
    $user->delete();
    return response()->json(null, 204);
  }
}
