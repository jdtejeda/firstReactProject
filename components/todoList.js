import { React, useState} from 'react';
import TodoItem from "./todoItem";

const TodoList = (props) => {
    const [todos, setTodos] = useState([...props.todos]);
    return(
        [<ul>
            {todos.filter(i => i.completed === false).map(i => <TodoItem item={i}/>)}
        </ul>,
        <ul>
            {todos.filter(i => i.completed === true).map(i => <TodoItem item={i}/>)}
        </ul>]
    );
};
export default TodoList;
