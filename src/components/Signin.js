import React from 'react';
import { useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set as fbset } from 'firebase/database';


export function SigninScreen() {
    const auth = getAuth();
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try {
        const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
        );
        } catch (error) {
        console.log(error.message);
        }
        const db = getDatabase();
        const nameRef = ref(db, "users/"+auth.currentUser.uid+"/name")
        const dailyRef = ref(db, "users/"+auth.currentUser.uid+"/daily")
        const petRef = ref(db, "users/" + auth.currentUser.uid + "/pet")
        fbset(nameRef, registerName);
        fbset(dailyRef, [{
            "task": "Drink Water!"
        }]);
        fbset(petRef, "dog.png");
    };

    const login = async () => {
        try {
        const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
        );
        } catch (error) {
        console.log(error.message);
        }
    };

    return (
        <section className="content-box-day">
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
