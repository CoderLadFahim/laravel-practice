import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

describe('the testing the behaviour of todosContainer', () => {
	it('should render an empty message initially', () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		const todosContainer = screen.getByTestId('todos-container');
		const expectedText = 'No todos left';
		const currentText = todosContainer.textContent;

		expect(currentText).toBe('Nothing left to do');
	});

	it('should render todos with the given value from input', () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		const inputEl = screen.getByPlaceholderText('Add Todo');
		const addBtn = screen.getByText('Add');

		const givenTodoText = 'Do the dishes';
		fireEvent.change(inputEl, { target: { value: givenTodoText } });
		fireEvent.click(addBtn);
		const todoEl = screen.getByText(givenTodoText);

		expect(todoEl).toBeTruthy();
	});

	it('should clear all todos when clearBtn is clicked', () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		const clearBtn = screen.getByText('Clear');
		fireEvent.click(clearBtn);

		const todosContainer = screen.getByTestId('todos-container');
		const expectedText = 'Nothing left to do';
		const currentText = todosContainer.textContent;

		expect(currentText).toBe(expectedText);
	});
});

describe('the TodoTypeSelector functionality', () => {
	it('renders all todos initially', () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		const inputEl = screen.getByPlaceholderText('Add Todo');
		const addBtn = screen.getByText('Add');
		// adding 4 todo items
		[
			'Do the dishes',
			'Hug your mum',
			'Take out the trash',
			'Establish neo-marxist communism',
		].forEach((todoText) => {
			fireEvent.change(inputEl, { target: { value: todoText } });
			fireEvent.click(addBtn);
		});

		const todos = screen.getAllByTestId('todo');
	});

	// it('shows only completed todos', () => {
	// 	render(
	// 		<Provider store={store}>
	// 			<App />
	// 		</Provider>
	// 	);

	// 	const inputEl = screen.getByPlaceholderText('Add Todo');
	// 	const addBtn = screen.getByText('Add');
	// 	const todosContainer = screen.getByTestId('todos-container');
	// 	// adding 4 todo items
	// 	[
	// 		'Do the dishes',
	// 		'Hug your mum',
	// 		'Take out the trash',
	// 		'Establish neo-marxist communism',
	// 	].forEach((todoText) => {
	// 		fireEvent.change(inputEl, { target: { value: todoText } });
	// 		fireEvent.click(addBtn);
	// 	});

	// 	const doneSelector = screen.getByText('Done');
	// 	fireEvent.click(doneSelector);

	// 	expect(todosContainer.length).toBe(0);
	// });
});
