import React from 'react';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set as fbset } from 'firebase/database';
import { HomeScreen } from "./Home"


export function SigninScreen() {
    const auth = getAuth();
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [confirmPs, setConfirmPs] = useState(false);
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        if (confirmPs == true) {
            try {
                const user = await createUserWithEmailAndPassword(
                    auth,
                    registerEmail,
                    registerPassword
                )
                document.getElementById("psMsg").innerHTML = "Welcome to Bark!";
                console.log(user);
            } catch(err){
                console.log(err.message);
            } 
            
            
            const db = getDatabase();
            const nameRef = ref(db, "users/" + auth.currentUser.uid + "/name")
            const dailyRef = ref(db, "users/" + auth.currentUser.uid + "/daily")
            const petRef = ref(db, "users/" + auth.currentUser.uid + "/pet")
            fbset(nameRef, registerName);
            fbset(dailyRef, [{
                "task": "Drink Water!"
            }]);
            fbset(petRef, "ham.png");
        };
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            // const location = HomeScreen();
            Navigate(<HomeScreen />);
            console.log(user.user.uid);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <section className="content-box">
            <p className="login-title">BARK!</p>

            <div className='spacer'></div>
            
            <h2 className='login-text'>Meet Your Pet Today!</h2>
            <div className='field-block'>
                <input
                    className="field"
                    placeholder="Email..."
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }} />
                <input
                    className="field"
                    type="password"
                    placeholder="Password..."
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                }}/>
                <p>
                    <input
                        className="field"
                        placeholder="Your Name..."
                        onChange={(event) => {
                            setRegisterName(event.target.value);
                        }}/>
                </p>
                <button className="second-btn" onClick={register}>Sign Up</button>
                <p id="signupMsg"></p>
            </div>

            <div className='spacer'></div>

            <div className='field-block'>
                <input
                    className="field"
                    placeholder="Email..."
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }} />
                <input
                    className="field"
                    type="password"
                    placeholder="Password..."
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }} />
                <button className="second-btn" onClick={login}>Log In</button>
            </div>
            <div className='spacer'></div>
            <div className='spacer'></div>
        </section>
    );
  }
