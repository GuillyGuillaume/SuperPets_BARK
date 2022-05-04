import React from 'react';
import { useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

export function SigninScreen() {
    const auth = getAuth();
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
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
    };

    const login = async () => {
        try {
        const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
        );
        console.log(user.user.uid);
        } catch (error) {
        console.log(error.message);
        }
    };

    return (
        <section className="content-box">
            <p className="login-title"><strong>BARK!</strong></p>

            <div className='spacer'></div>
            
            <p>Your Personal Virtual Support Companion</p>
            <div>
                <input
                placeholder="Email..."
                onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }}/>
                <input
                placeholder="Password..."
                onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }}/>
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

/*

    const logout = async () => {
        await signOut(auth);
    };



{user?.email}
<button className="primary-btn" onClick={logout}><strong>Log Out</strong></button>
<div className='spacer'></div>
*/