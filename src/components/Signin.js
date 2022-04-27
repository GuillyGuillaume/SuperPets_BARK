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
        console.log(user);
        } catch (error) {
        console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <section className="content-box">
            <p class="login-title"><strong>BARK!</strong></p>
            <div>
                <p>Your Personal Virtual Support Companion</p>
                <button class="primary-btn" type="submit"><strong>Log In</strong></button>                
                <button class="second-btn" type="submit"><strong>Sign Up</strong></button>
            </div>

            <div>
                <h3> Register User </h3>
                <input
                placeholder="Email..."
                onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }}
                />
                <input
                placeholder="Password..."
                onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }}
                />

                <button onClick={register}> Create User</button>
            </div>

            <div>
                <h3> Login </h3>
                <input
                placeholder="Email..."
                onChange={(event) => {
                    setLoginEmail(event.target.value);
                }}
                />
                <input
                placeholder="Password..."
                onChange={(event) => {
                    setLoginPassword(event.target.value);
                }}
                />

                <button onClick={login}> Login</button>
            </div>

            <h4> User Logged In: </h4>
            {user?.email}

            <button onClick={logout}> Sign Out </button>

        </section>
    );
  }