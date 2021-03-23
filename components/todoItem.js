import React from 'react';

function buttonClick(){
    console.log('cotiz')
}

const TodoItem = (props) => {
    const id = props.item.id;
    const title = props.item.title;
    const status = props.item.completed ? 'completado.' : 'en curso.';
    const a = <del><li><b>Tarea {id}:</b> {title}. <b>Estado:</b> {status}</li></del>
    const b = <li><b>Tarea {id}:</b> {title}. <b>Estado:</b> {status}<button onClick = {buttonClick}>Finalizar.</button></li>
    return(
        props.item.completed? a:b
    );
};
export default TodoItem;
