import { useEffect, useState } from "react";
import TodoList from "./todoList";

export default function FirstComponent() {
    const [users, setUsers] = useState([]);
    const [todos, setTodos] = useState([]);
    
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(res => res.json())
            .then(json => setUsers(json));
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(res => res.json())
            .then(json => setTodos(json));
    },[]);

    return (
        <div>
            {users.map(i => [
                <h1>{i.name}</h1>,
                <TodoList todos = {todos.filter(j => j.userId === i.id)} allTodos = {todos} setAllTodos = {setTodos}/> 
            ])}
        </div>
    )
}