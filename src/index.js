import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();


todoList.todos.forEach(crearTodoHtml);

//Esto de abajo es lo mismo que arriba, como se repite el argumento 'todo' se puede obviar
//esto funciona bien si el argumento que se trate (este caso 'todo') es solo 1 y no más de 1
//todoList.todos.forEach(crearTodoHtml);


console.log('todos', todoList.todos);