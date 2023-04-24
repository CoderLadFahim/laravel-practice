<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index() {
        $todos = Todo::all();
        return response()->json($todos);
    }

    public function show(Todo $todo) {
        return $todo;
    }

    public function create(Request $request) {
        $new_todo = Todo::create([
            'name' => $request->input('name'),
            'is_completed' => $request->input('is_completed'),
        ]);

        return $new_todo;
    }
}
