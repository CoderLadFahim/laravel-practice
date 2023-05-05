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
Route::prefix('todos')->group(function () {
    Route::get('', [TodoController::class, 'index']);
    Route::get('/{todo}', [TodoController::class, 'show']);
    Route::get('/{todo}/category', [TodoController::class, 'getCategory']);
    Route::post('/create', [TodoController::class, 'create']);
    Route::put('/update/{todo}', [TodoController::class, 'update']);
    Route::delete('/delete/{todo}', [TodoController::class, 'destroy']);
});

Route::prefix('categories')->group(function () {
    Route::get('/', [CategoryController::class, 'index']);
    Route::get('/{category}', [CategoryController::class, 'show']);
    Route::get('/{category}/todos', [CategoryController::class, 'getTodos']);
    Route::post('/create', [CategoryController::class, 'create']);
});

