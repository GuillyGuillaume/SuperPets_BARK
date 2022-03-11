import React from 'react';
import { AboutScreen } from './About';
import { HomeScreen } from './Home';
import { DailyScreen } from './DailyPlan';
import { WeeklyScreen } from './WeeklyPlan';
import { PetScreen } from './Pets';
import { EsaScreen } from './Esa';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />}></Route>
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