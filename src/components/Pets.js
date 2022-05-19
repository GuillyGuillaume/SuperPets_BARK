import React from 'react';
import { getDatabase, ref, set as fbset } from 'firebase/database';
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";



export function PetScreen() {
    const auth = getAuth();
    const navigate = useNavigate();
    const todayDate = new Date();
    const [dayCycle, setDayCycle] = React.useState(true);
    useEffect(() => {
        if(todayDate.getHours() > 20 || todayDate.getHours() < 5){
            setDayCycle(false);
        }
      }, []);

   
    const dogClick = async () => {
        const db = getDatabase();
        const petRef = ref(db, "users/"+auth.currentUser.uid+"/pet")
        fbset(petRef, "dog.png");
        navigate('/');
    };
    const catClick = async () => {
        const db = getDatabase();
        const petRef = ref(db, "users/"+auth.currentUser.uid+"/pet")
        fbset(petRef, "cat.png");
        navigate('/');
    };
    const hamClick = async () => {
        const db = getDatabase();
        const petRef = ref(db, "users/"+auth.currentUser.uid+"/pet")
        fbset(petRef, "ham.png");
        navigate('/');
    };
    
return (
    <section className={dayCycle ? "content-box-day" : "content-box-night"}>
        <h1 className="page-title">Virtual Companions</h1>
        <div className="pets">
            <div className="pet-card">
                <img src={'img/dog.png'}/>
                <p></p>
                <p>Name: BUDDY</p>
                <button className="btn btn-warning" onClick={dogClick}>Adopt!</button>
            </div>
            <div className="pet-card">
            <img src={'img/cat.png'}/>
                <p></p>
                <p>Name: LUNA</p>
                <button className="btn btn-warning" onClick={catClick}>Adopt!</button>
            </div>
            <div className="pet-card">
            <img src={'img/ham.png'}/>
                <p></p>
                <p>Name: CHEESE CURD</p>
                <button className="btn btn-warning" onClick={hamClick}>Adopt!</button>
            </div>
        </div>
        <div className="spacer"></div>
    </section>
    );
}