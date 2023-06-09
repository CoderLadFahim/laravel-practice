import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppNav from './components/AppNav';
import Todo from './components/Todo';
import './App.css';
import { getTodos } from './helperFunctions';
import { addTodos } from './features/todos/todosSlice';

function App() {
	const todos = useSelector((state) => state.todos.todos);
	const dispatch = useDispatch();
	const [viewType, setViewType] = useState('all');

	useEffect(() => {
        getTodos().then((data) => {
			const todosMapped = data.map((todo) => ({
				text: todo.name,
				id: todo.id,
				isCompleted: Boolean(todo.is_completed),
			}));
			dispatch(addTodos(todosMapped));
		});
	}, []);

	const renderTodos = (type) => {
		switch (type) {
			case 'all':
				return todos.map((todo) => <Todo todo={todo} key={todo.id} />);
			case 'done':
				return todos.map(
					(todo) => todo.isCompleted && <Todo todo={todo} key={todo.id} />
				);
			case 'left':
				return todos.map(
					(todo) => !todo.isCompleted && <Todo todo={todo} key={todo.id} />
				);
			default:
				return 'Something went wrong';
		}
	};

	const generateProgressStatusText = () => {
		const numOfCompletedTodos = todos.filter(
			(todo) => todo.isCompleted
		).length;
		const numOfTodos = todos.length;
		const numOfIncompleteTodos = numOfTodos - numOfCompletedTodos;

		if (numOfIncompleteTodos === 0)
			return (
				<h2 className="text-gray-50 nunito-bold font-bold  text-lg">
					<span className="text-green-300">
						{viewType !== 'left' ? 'All todos done!' : 'None left'}
					</span>
				</h2>
			);

		if (viewType === 'all')
			return (
				<h2 className="text-gray-50 nunito-bold font-bold  text-lg">
					<span className="text-green-400">{numOfCompletedTodos}</span> out
					of <span className="text-blue-400">{numOfTodos}</span> todos done
				</h2>
			);
		if (viewType === 'done')
			return (
				<h2 className="text-gray-50 nunito-bold font-bold  text-lg">
					<span className="text-green-400">{numOfCompletedTodos}</span>{' '}
					todos done
				</h2>
			);
		if (viewType === 'left')
			return (
				<h2 className="text-gray-50 nunito-bold font-bold  text-lg">
					<span className="text-red-400">{numOfIncompleteTodos}</span>{' '}
					todos left
				</h2>
			);
	};

	return (
		<div className="App">
			<AppNav
				activeViewType={viewType}
				viewTypeUpdater={(newType) => setViewType(newType)}
				progressStatusTextGenerator={generateProgressStatusText}
				todosLength={todos.length}
			/>

			<div
				className="todos-container container mt-16 px-5 lg:px-24 xl:px-11 2xl:px-6 gap-y-3 flex flex-wrap items-start justify-between"
				data-testid="todos-container"
			>
				{todos.length ? (
					renderTodos(viewType)
				) : (
					<span className="text-center block my-0 mx-auto text-gray-300 block pt-20">
						Nothing left to do
					</span>
				)}
			</div>
		</div>
	);
}

export default App;
