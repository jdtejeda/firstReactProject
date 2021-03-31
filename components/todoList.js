import React, { useEffect, useState} from 'react';
import TodoItem from "./todoItem";
import TodoButton from "./todoButton";

const TodoList = (props) => {
    const [todos, setTodos] = useState([]);
    const inputRef = React.createRef();
    
    useEffect(() => {
        setTodos(props.todos)
    },[props.todos]);

    function completeTodo(todoId){
        const todosIndex = todos.findIndex(i => i.id === todoId);
        let newTodos = [...todos];
        newTodos[todosIndex] = {...newTodos[todosIndex], completed:true};
        setTodos(newTodos);

        const allTodosIndex = props.allTodos.findIndex(i => i.id === todoId);
        let newAllTodos = [...props.allTodos];
        newAllTodos[allTodosIndex] = {...newAllTodos[allTodosIndex], completed:true};
        props.setAllTodos(newAllTodos);
    }
    
    function addTodo(ref){
        const text = ref.current.value;
        if(text === ""){return;}
        const newId = props.allTodos.reduce((a,b) => (a>b) ? a : b).id+1;
        const userId = todos[0].userId;
        const newTodo = {completed: false, id: newId, title: text, userId: userId};
        
        let newTodos = [...todos];
        newTodos.push(newTodo);
        setTodos(newTodos);

        let newAllTodos = [...props.allTodos];
        newAllTodos.push(newTodo);
        props.setAllTodos(newAllTodos);

        ref.current.value = "";
    }

    return(
        <div className='container'>
            <div className='row'>
                {todos.filter(i => i.completed === false).map(i => <TodoItem item={i} completeTodo={completeTodo}/>)}
            </div>
            <div className='my-3 row input-group'>
                <input ref={inputRef}/>
                <div class="input-group-append">
                    <TodoButton onClick={()=>addTodo(inputRef)} text={'Agregar to-do'}/>
                </div>            
            </div>
            <div className='row'>
                {todos.filter(i => i.completed === true).map(i => <TodoItem item={i}/>)}
            </div>
        </div>       
    );
};
export default TodoList;
