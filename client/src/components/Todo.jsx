import { faTrash, faCheck, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDispatch } from 'react-redux';
import { deleteTodo, changeTodoState } from '../features/todos/todosSlice';

function Todo({ todo }) {
	const dispatch = useDispatch();
	const todoDeleter = () => dispatch(deleteTodo(todo.id));
	const todoStateChanger = () => dispatch(changeTodoState(todo.id));

	return (
		<div
			data-testid="todo"
			className={`todo ${todo.isCompleted ? 'done' : 'left'}`}
		>
			<p className="w-3/4">{todo.text}</p>
			<div className="w-1/4 flex items-center justify-around">
				<FontAwesomeIcon
					className="opacity-90  cursor-pointer hover:text-white hover:opacity-100 transition"
					icon={todo.isCompleted ? faRedoAlt : faCheck}
					onClick={todoStateChanger}
				/>
				<FontAwesomeIcon
					className="opacity-90  cursor-pointer hover:text-white hover:opacity-100 transition"
					icon={faTrash}
					onClick={todoDeleter}
				/>
			</div>
		</div>
	);
}

export default Todo;
