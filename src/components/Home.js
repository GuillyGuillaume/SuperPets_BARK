import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { getDatabase, ref, set as fbset, onValue } from 'firebase/database';
import { getAuth } from "firebase/auth";
import { NavBar } from './Navigation';

export function HomeScreen() {
    const [response, setResponse] =useState("");
    function handleClick(event){
        let mood = event.target.value;
        if(mood == "frustrated"){
            setResponse("I'm sorry to hear that! What's wrong?")
        }
        if (mood == "sad") {
            setResponse("I hope you get better soon")
        }
        if (mood == "normal") {
            setResponse("What a peaceful day!")
        }
        if (mood == "notbad") {
            setResponse("Wonderful")
        }
        if (mood == "happy") {
            setResponse("I'm happy to hear that!")
        }
        // document.getElementById('toggle').className="show";
    }
    const todayDate = new Date();
    const [name, setName] = React.useState("");
    const [currPet, setPet] = React.useState("");
    
    let currTime = "";
    
    const auth = getAuth();
    const db = getDatabase();

    if(todayDate.getMinutes() < 10){
        if(todayDate.getHours() > 12){
            currTime = todayDate.getHours()-12 + ":0" + todayDate.getMinutes() + " PM";
        } else {
            currTime = todayDate.getHours() + ":0" + todayDate.getMinutes() + " AM";
        }
    } else {
        if(todayDate.getHours() > 12){
            currTime = todayDate.getHours()-12 + ":" + todayDate.getMinutes() + " PM";
        } else {
            currTime = todayDate.getHours() + ":" + todayDate.getMinutes() + " AM";
        }
    }

    useEffect(() => {
        const nameRef = ref(db, "users/"+auth.currentUser.uid+"/name") //  dir/key for reference
        //addEventListener for database value change
        const offFunction = onValue(nameRef, (snapshot) => {
            let userName = snapshot.val(); //extract the value from snapshot
            setName(userName);
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
            <h1 className="time">
                <strong>{currTime}</strong>
            </h1>
            <p>
                Hi, {name}! How are you feeling right now?
            </p>
            <span className="mood-box">
                <button className="mood-button" onClick={handleClick} value = "frustrated">😒</button>
                <button className="mood-button" onClick={handleClick} value = "sad">😔</button>
                <button className="mood-button" onClick={handleClick} value = " normal">😐</button>
                <button className="mood-button" onClick={handleClick} value = "notbad">🙂</button>
                <button className="mood-button" onClick={handleClick} value= "happy">😀</button>
            </span>
            </div>
        <h2>
            <strong>{response}</strong>
        </h2>
        <img src={'img/' + currPet} width='300' alt="virtual pet"/>

        <div className="spacer"></div>
    </section>
    );
}