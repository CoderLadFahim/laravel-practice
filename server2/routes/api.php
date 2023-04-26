<?php

use App\Http\Controllers\CategoryController;
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
Route::get('/todos/{todo}', [TodoController::class, 'show']);
Route::get('/todos/create', [TodoController::class, 'create']);
Route::get('/todos/update/{todo}', [TodoController::class, 'update']);
Route::get('/todos/delete/{todo}', [TodoController::class, 'destroy']);

Route::get('/categories', [CategoryController::class, 'index']);
