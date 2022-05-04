import React from 'react';
import { AboutScreen } from './About';
import { HomeScreen } from './Home';
import { DailyScreen } from './DailyPlan';
import { WeeklyScreen } from './WeeklyPlan';
import { PetScreen } from './Pets';
import { EsaScreen } from './Esa';
import { SigninScreen } from './Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useState, useEffect } from "react";
import {
    getAuth,
    onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [userData, setUserData] = useState(undefined);
  useEffect(() => {
    const auth = getAuth();
    const unregisterAuthListener = onAuthStateChanged(auth, (user) => {
      if(user){ //have a user
        console.log("logging in", user);
        setUserData(user);
      } else {
        console.log("logging out");
        setUserData(undefined);
      }
    })

    return () => {
      unregisterAuthListener();
    }
  }, []);

  if(userData === undefined) {
    return <SigninScreen />
  } else {
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
}

export default App;