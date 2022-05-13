import React, { useState, useEffect } from 'react';
import { getDatabase, ref, set as fbset, onValue } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";


function Todo({ todo, index, removeTodo }) {
    return (
        <div className="task-card">
            <button className="btn btn-sm btn-warning" onClick={() => removeTodo(index)}>Done</button>
            <p>
                {todo}
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
    const auth = getAuth();
    const navigate = useNavigate();
    const [todos, setTodos] = React.useState([]);
    const todayDate = new Date();
    const currDate = todayDate.getMonth() + "-" + todayDate.getDay();
    const [currPet, setPet] = React.useState("");
    const [response, setResponse] = useState("");

    const db = getDatabase();
    useEffect(() => {
        const dailyArrRef = ref(db, "users/"+auth.currentUser.uid+"/daily") //  dir/key for reference
        //addEventListener for database value change
        const offFunction = onValue(dailyArrRef, (snapshot) => {
            let newValue = snapshot.val(); //extract the value from snapshot
            setTodos(newValue);
            console.log(newValue);
        });
        return () => {
            offFunction();
        }
    }, []);

    useEffect(() => {
        const petRef = ref(db, "users/"+auth.currentUser.uid+"/pet") //  dir/key for reference
        //addEventListener for database value change
        const offFunction = onValue(petRef, (snapshot) => {
            let newValue = snapshot.val(); //extract the value from snapshot
            setPet(newValue);
            console.log(newValue);
        });
        return () => {
            offFunction();
        }
    }, []);

   
    const randomResponse = () =>{
        const sentences = ["Well Done!", "Good Job!", "I'm impressed!", "Superb!", "Keep it Up!"]  
        let res = sentences[Math.floor((sentences.length-1) * Math.random())]
        setResponse(res)
    }

    const addTodo = text => {
        const newTodos = [...todos, text];
        const index = newTodos.length-1;
        const taskRef = ref(db, "users/"+auth.currentUser.uid+"/daily/"+index+"/task")
        fbset(taskRef, text);
    };

    const removeTodo = index => {
        const timeDoneRef = ref(db, "users/"+auth.currentUser.uid+"/daily/"+index+"/timeDone")
        fbset(timeDoneRef, currDate);
        randomResponse();
    };

    function handleClick() {
        navigate('/weeklyPlan')
    }

    return (
        <section className="content-box">
        <h1 className="page-title">Daily Reminders</h1>
        <div className="spacer"></div>
        <div className="daily-tasks">
            {todos.map((todo, index) => {
                if(todo.timeDone != currDate) {
                    return(<Todo key={index} index={index} todo={todo.task} removeTodo={removeTodo} />)
                }
            })}

        </div>
        <FormTodo addTodo={addTodo} />
        <div className="chatbox">
            <p>
                These are your tasks for today!
                <p>{response}</p>
            </p>
        </div>
        
        <img src={'img/' + currPet} width='300'/>
        
        <div className="spacer"></div>
        </section>
    );
}

//<div className="chatbox">
//<p><a onClick={handleClick}>Click here to see your weekly schedule!</a></p>
//</div>
