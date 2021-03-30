import React from 'react';

function buttonClick(props,todoId){
    props.completeTodo(todoId);
}

const TodoItem = (props) => {
    const id = props.item.id;
    const title = props.item.title;
    const status = props.item.completed ? 'completado.' : 'en curso.';
    const a = <del><li><b>Tarea {id}:</b> {title}. <b>Estado:</b> {status}</li></del>
    const b = <li className="mb-3"><b>Tarea {id}:</b> {title}. <b>Estado:</b> {status}<button className="btn btn-danger" onClick = {() => buttonClick(props,id)}>Finalizar.</button></li>
    return(
        props.item.completed? a:b
    );
};
export default TodoItem;
