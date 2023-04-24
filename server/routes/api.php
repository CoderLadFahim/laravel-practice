<?php

use App\Http\Controllers\TodoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/todos', [TodoController::class, 'index']);

Route::get('/todos/create/', [TodoController::class, 'create']); 
Route::get('/todos/read/{todo}', [TodoController::class, 'show']); 
// Route::get('/todos/update/{id}', [TodoController::class, 'show']); 
// Route::get('/todos/delete/{id}', [TodoController::class, 'show']); 
