import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { DailyTasks } from './DailyTasks';
import { NavBar } from './Navigation';


export function DailyScreen() {
    const [currentTasks, setCurrentTasks] = useState(["Take vitamins", "Take medications", "Feed Mushu", "Drink water"]);

    return (
        <section class="content-box">
        <h1 class="page-title">Daily Reminders</h1>

        <div class="spacer"></div>

        <DailyTasks tasks={currentTasks}/>

        <div class="form-group mb-1">
            <input type="text" id="task-input" class="form-control" placeholder="Any other daily tasks?"/>
        </div>
        <div class="form-group">
            <button type="button" id="add-task-button" class="btn btn-primary">Add task to list</button>
        </div>

        <div class="chatbox">
            <p><a href="weeklySchedule.html">Click here to see your weekly schedule!</a></p>
        </div>
        <img src="img/tempdog.gif" width="300"/>

        <div class="spacer"></div>
        <NavBar />
    </section>
    );
}