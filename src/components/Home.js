import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Slider from '@mui/base/SliderUnstyled';


import { NavBar } from './Navigation';

export function HomeScreen() {
    function handleClick(){
        document.getElementById('toggle').className="show";
    }
return (
    <section className="content-box">
        <h1 className="page-title">Daily Checkin</h1>

        <div className="spacer"></div>

        <div className="chatbox">
            <p>
                Hi, Jane! It’s 12:34 PM, and you are halfway through your classes for today. How are you feeling?
            </p>
            <div>
            <input type="range" min="0" max="8"/>
                <div className="slidecontainer">
                    <div>😒</div>
                    <div>😔</div>
                    <div>😐</div>
                    <div>🙂</div>
                    <span>😀</span>
                </div>
                <button className="btn btn-sm btn-warning" onClick={handleClick}>Check In</button>
            </div>
        </div>
        <p id="toggle" className="hide">
            <strong>WOOF WOOF!</strong>
        </p>
        <img src="img/tempdog.gif" width="300" alt="virtual pet"/>

        <div className="spacer"></div>
        <NavBar />
    </section>
    );
}