import React, { useState } from 'react';
import { getDatabase, ref, set as fbset } from 'firebase/database';
import { getAuth } from "firebase/auth";

export function PetScreen() {
    const auth = getAuth();
    const [msg, setMsg] = useState("");
   
    const dogClick = async () => {
        const db = getDatabase();
        const petRef = ref(db, "users/"+auth.currentUser.uid+"/pet")
        fbset(petRef, "dog.png");
        setMsg("Adopt Buddy successufully!")
        
    };
    const catClick = async () => {
        const db = getDatabase();
        const petRef = ref(db, "users/"+auth.currentUser.uid+"/pet")
        fbset(petRef, "cat.png");
        setMsg("Adopt Luna successufully!")
    };
    const hamClick = async () => {
        const db = getDatabase();
        const petRef = ref(db, "users/"+auth.currentUser.uid+"/pet")
        fbset(petRef, "ham.png");
        setMsg("Adopt Cheese Curd successufully!")
    };
    
return (
    <section className="content-box">
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
        <p>{msg}</p>
        <div className="spacer"></div>
    </section>
    );
}