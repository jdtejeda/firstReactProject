import React from 'react';
import TodoButton from "./todoButton";

function buttonClick(props,todoId){
    props.completeTodo(todoId);
}

const TodoItem = (props) => {
    const id = props.item.id;
    const title = <div><b>Tarea {id}: </b> {props.item.title}</div>;
    const status = props.item.completed;
    return(
        <div className='container'>
            <div className='row'>
                <div className='my-2 column'>
                    {status ? <del>{title}</del>:title}
                </div>
                {status ? "":
                <div className='ml-2 column'>
                    <TodoButton onClick={() => buttonClick(props,id)} text={'Finalizar'}/>
                </div>}
            </div>
            <div className='row'>
                <div className='mb-2 column'>
                    <b>Estado: </b> {status ? 'completado.' : 'en curso.'}
                </div>
            </div>
        </div>
    );
};
export default TodoItem;
