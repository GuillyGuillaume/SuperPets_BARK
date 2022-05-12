import React from 'react';
import { useState } from "react";
import { Navigate} from "react-router-dom";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set as fbset} from 'firebase/database';
import {HomeScreen} from "./Home"


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
        console.log(user);
        } catch (error) {
        console.log(error.message);
        }
        const db = getDatabase();
        const nameRef = ref(db, "users/"+auth.currentUser.uid+"/name")
        const dailyRef = ref(db, "users/"+auth.currentUser.uid+"/daily")
        const petRef = ref(db, "users/"+auth.currentUser.uid+"/pet")
        fbset(nameRef, registerName);
        fbset(dailyRef, [{
            "task": "Drink Water!"
          }]);
        fbset(petRef, "ham.png");
    };

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
            <p className="login-title"><strong>BARK!</strong></p>

            <div className='spacer'></div>
            
            <h2>Meet Your Pet Today!</h2>
            <div>
                <input
                placeholder="Email..."
                onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }}/>
                <input
                    /* image 18 */

                type="password"
                placeholder="Password..."
                onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }}/>
                <p>
                    <input
                    placeholder="Your Name..."
                    onChange={(event) => {
                        setRegisterName(event.target.value);
                    }}/>
                </p>
                <button className="second-btn" onClick={register}><strong>Sign Up</strong></button>
            </div>

            <div className='spacer'></div>

            <div>
                <input
                placeholder="Email..."
                onChange={(event) => {
                    setLoginEmail(event.target.value);
                }}/>
                <input
                type = "password"
                placeholder="Password..."
                onChange={(event) => {
                    setLoginPassword(event.target.value);
                }}/>
                <button className="second-btn" onClick={login}><strong>Log In</strong></button>
            </div>

            <div className='spacer'></div>
        </section>
    );
  }
