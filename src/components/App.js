import React, { useState, useEffect } from 'react';
import { AboutScreen } from './About';
import { HomeScreen } from './Home';
import { DailyScreen } from './DailyPlan';
import { NavBar } from './Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />}></Route>
          <Route path="/about" element={<AboutScreen />}></Route>
          <Route path="/dailyPlan" element={<DailyScreen />}></Route>
          <Route path="*" element={<HomeScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;