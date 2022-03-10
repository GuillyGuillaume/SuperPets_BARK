import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { DailyTasks } from './DailyTasks';
import { NavBar } from './Navigation';
import { getDatabase, ref, set as fbset, onValue } from 'firebase/database';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function WeeklyScreen() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/dailyPlan')
    }

    return (
        <section className="content-box">
            <h1 className="page-title">Weekly Schedule</h1>

            <div className="spacer"></div>

            <div className="mb-3 wk-sched">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <p>Therapy with Dr. Doe</p>
                        Tuesday (3/8) at 10:00am
                    </li>
                    <li className="list-group-item">
                        <p>Mentor meeting with John</p>
                        Wednesday (3/9) at 1:00pm
                    </li>
                    <li className="list-group-item">
                        <p>Dinner at Jane's</p>
                        Friday (3/11) at 7:00pm
                    </li>
                </ul>
            </div>
            <div className="form-group">
                <button type="button" id="add-task-button" className="btn btn-primary">Add event to list</button>
            </div>
            <div className="chatbox">
                <p><a onClick={handleClick}>Click here to see your weekly schedule!</a></p>
            </div>
            <img src="img/tempdog.gif" width="300"/>

            <div className="spacer"></div>

            <NavBar/>
        </section>
    );
}
