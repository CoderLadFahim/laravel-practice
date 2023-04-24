import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [
		// { text: 'todo', id: Date.now(), isCompleted: false },
		// { text: 'todo', id: Date.now(), isCompleted: false },
		// { text: 'todo', id: Date.now(), isCompleted: false },
		// { text: 'todo', id: Date.now(), isCompleted: false },
		// { text: 'todo', id: Date.now(), isCompleted: false },
		// { text: 'todo', id: Date.now(), isCompleted: false },
		// { text: 'todo', id: Date.now(), isCompleted: false },
		// { text: 'todo', id: Date.now(), isCompleted: false },
		// { text: 'todo', id: Date.now(), isCompleted: false },
		// { text: 'todo', id: Date.now(), isCompleted: false },
		// { text: 'todo', id: Date.now(), isCompleted: false },
		// { text: 'todo', id: Date.now(), isCompleted: false },
	],
};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, { payload }) => {
			state.todos = [...state.todos, payload];
		},
		deleteTodo: (state, { payload: todoId }) => {
			state.todos = state.todos.filter((todo) => todo.id !== todoId);
		},
		changeTodoState: (state, { payload: todoId }) => {
			state.todos = state.todos.map((todo) =>
				todo.id === todoId
					? { ...todo, isCompleted: !todo.isCompleted }
					: todo
			);
		},
		clearTodos: (state, action) => {
			state.todos = [];
		},
	},
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, clearTodos, changeTodoState } =
	todosSlice.actions;

export default todosSlice.reducer;
