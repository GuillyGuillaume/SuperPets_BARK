import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { DailyTasks } from './DailyTasks';
import { NavBar } from './Navigation';
import { getDatabase, ref, set as fbset, onValue } from 'firebase/database';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Todo({ todo, index, removeTodo }) {
    return (
        <div className="task-card">
            <button className="btn btn-sm btn-warning" onClick={() => removeTodo(index)}>Done</button>
            <p>
                {todo.text}
            </p>
        </div>
    );
}

function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <div className="form-box form-group mb-1">
            <input 
                type="text" 
                id="task-input" 
                className="form-control" 
                value={value} onChange={e => setValue(e.target.value)} 
                placeholder="Add new task"/>
            <button type="button" id="add-task-button" className="btn btn-primary" 
            onClick={handleSubmit}>Add task to list</button>
        </div>
    );
}

export function DailyScreen() {
    const navigate = useNavigate();
    const [todos, setTodos] = React.useState([
    {text: "Take vitamins"},        
    {text: "Take medications"},
    {text: "Feed Mushu"},
    {text: "Drink water bottle twice"}  
    ]);

    const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    };

    const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    };

    function handleClick() {
        navigate('/weeklyPlan')
    }

    return (
        <section className="content-box">
        <h1 className="page-title">Daily Reminders</h1>
        <div className="spacer"></div>
            {todos.map((todo, index) => (
                <Todo
                key={index}
                index={index}
                todo={todo}
                removeTodo={removeTodo}
                />
            ))}
        <FormTodo addTodo={addTodo} />
        <div className="chatbox">
        <p><a onClick={handleClick}>Click here to see your weekly schedule!</a></p>
        </div>
        <img src="img/tempdog.gif" width="300"/>

        <div className="spacer"></div>

        <NavBar />
        </section>

    );
}
