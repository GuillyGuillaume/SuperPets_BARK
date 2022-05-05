import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { getDatabase, ref, set as fbset, onValue } from 'firebase/database';
import { getAuth } from "firebase/auth";
import { NavBar } from './Navigation';

export function HomeScreen() {
    function handleClick(){
        document.getElementById('toggle').className="show";
    }
    const todayDate = new Date();
    const [name, setName] = React.useState("");
    const auth = getAuth();
    const db = getDatabase();
    useEffect(() => {
        const nameRef = ref(db, "users/"+auth.currentUser.uid+"/name") //  dir/key for reference
        //addEventListener for database value change
        const offFunction = onValue(nameRef, (snapshot) => {
            let userName = snapshot.val(); //extract the value from snapshot
            console.log(userName);
            setName(userName);
        });
        return () => {
            offFunction();
        }
    }, []);



return (
    <section className="content-box">
        <h1 className="page-title">Daily Checkin</h1>

        <div className="spacer"></div>

        <div className="chatbox">
            <p>
                Hi, {name}! It’s {todayDate.getHours() + ":" + todayDate.getMinutes()}, and you are halfway through your classes for today. How are you feeling?
            </p>
            <div>
            <input type="range" min="0" max="8"/>
                <div className="slidecontainer">
                    <div>😒</div>
                    <div>😔</div>
                    <div>😐</div>
                    <div>🙂</div>
                    <span>😀</span>
                </div>
                <button className="btn btn-sm btn-warning" onClick={handleClick}>Check In</button>
            </div>
        </div>
        <p id="toggle" className="hide">
            <strong>WOOF WOOF!</strong>
        </p>
        <img src={'img/tempdog.gif'} width='300' alt="virtual pet"/>

        <div className="spacer"></div>
        <NavBar />
    </section>
    );
}