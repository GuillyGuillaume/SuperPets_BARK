import React from 'react';
import { AboutScreen } from './About';
import { HomeScreen } from './Home';
import { DailyScreen } from './DailyPlan';
import { WeeklyScreen } from './WeeklyPlan';
import { PetScreen } from './Pets';
import { EsaScreen } from './Esa';
import { SigninScreen } from './Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

function App() {
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

  const logout = async () => {
      await signOut(auth);
  };
  return (
    
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />}></Route>
          <Route path="/signin" element={<SigninScreen />}></Route>
          <Route path="/about" element={<AboutScreen />}></Route>
          <Route path="/dailyPlan" element={<DailyScreen />}></Route>
          <Route path="/weeklyPlan" element={<WeeklyScreen />}></Route>
          <Route path="/pets" element={<PetScreen />}></Route>
          <Route path="/esa" element={<EsaScreen />}></Route>
          <Route path="*" element={<HomeScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;