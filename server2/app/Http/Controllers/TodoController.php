<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::all();
        return response()->json($todos);
    }

    public function show(Todo $todo)
    {
        return $todo;
    }

    public function create(Request $request)
    {
        $new_todo = Todo::create([
            'name' => $request->name,
            'is_completed' => $request->is_completed,
            'category_id' => $request->category_id,
        ]);

        return $new_todo;
    }

    public function update(Request $request, Todo $todo)
    {
        $todo->update([
            'name' => $request->name,
            'is_completed' => $request->is_completed,
            'category_id' => $request->category_id,
        ]);

        return $todo;
    }

    public function destroy(Todo $todo)
    {
        $todo->delete();
        return response()->json(['msg' => 'Todo deleted']); 
    }

    public function getCategory(Todo $todo)
    {
        return $todo->category;
    }
}


