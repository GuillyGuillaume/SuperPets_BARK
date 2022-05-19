import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from "firebase/auth";

export function HomeScreen() {
    const todayDate = new Date();
    const [name, setName] = React.useState("");
    const [currPet, setPet] = React.useState("");
    const [currTalkPet, setTalkPet] = React.useState("");
    const [dayCycle, setDayCycle] = React.useState(true);


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
            setTalkPet("talk_" + newValue);
            if(todayDate.getHours() > 20 || todayDate.getHours() < 5){
                setPet("sleep_" + newValue);
                setDayCycle(false);
            }
        });
        return () => {
            offFunction();
        }
    }, []);

    const [response, setResponse] =useState("");
    function handleClick(event){
        let mood = event.target.value;
        if(mood === "frustrated"){
            if(todayDate.getHours() > 20 || todayDate.getHours() < 5){
                setResponse("Get some rest! You'll feel better tomorrow!");
            } else {
                setResponse("Hang in there! You got it!");
            }
        }
        if (mood === "sad") {
            if(todayDate.getHours() > 20 || todayDate.getHours() < 5){
                setResponse("Sleep on it! Tomorrow's a new day!");
            } else {
                setResponse("I hope you get better soon");
            }
        }
        if (mood === "normal") {
            if(todayDate.getHours() > 20 || todayDate.getHours() < 5){
                setResponse("When in doubt, sleep!");
            } else {
                setResponse("What a peaceful day!");
            }
        }
        if (mood === "notbad") {
            if(todayDate.getHours() > 20 || todayDate.getHours() < 5){
                setResponse("Sweet Dreams!");
            } else {
                setResponse("Wonderful!");
            }
        }
        if (mood === "happy") {
            if(todayDate.getHours() > 20 || todayDate.getHours() < 5){
                setResponse("ZZZZzzzzz......");
            } else {
                setResponse("I'm happy to hear that!");
            }
        }
        if(todayDate.getHours() < 20 && todayDate.getHours() > 5){
            setPet(currTalkPet);
            setTimeout(function(){
                setPet(currPet);
            }, 500); 
        }
    }

return (
    <section className={dayCycle ? "content-box-day" : "content-box-night"}>
        <h1 className="page-title">Daily Checkin</h1>

        <div className="spacer"></div>

        <div className="chatbox">
            <h1 className="time">
                <strong>{currTime}</strong>
            </h1>
            <p>
                Hi, {name}! How are you feeling right now?
                <p>
                    <strong>{response}</strong>
                </p>
            </p>
            <span className="mood-box">
                <button className="mood-button" onClick={handleClick} value = "frustrated">😒</button>
                <button className="mood-button" onClick={handleClick} value = "sad">😔</button>
                <button className="mood-button" onClick={handleClick} value = "normal">😐</button>
                <button className="mood-button" onClick={handleClick} value = "notbad">🙂</button>
                <button className="mood-button" onClick={handleClick} value = "happy">😀</button>
            </span>
        </div>
        <img src={'img/' + currPet} width='300' alt="virtual pet"/>

        <div className="spacer"></div>
    </section>
    );
}