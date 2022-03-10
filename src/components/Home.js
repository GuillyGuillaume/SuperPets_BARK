import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { NavBar } from './Navigation';

export function HomeScreen() {
return (
    <section class="content-box">
        <h1 class="page-title">Daily Checkin</h1>

        <div class="spacer"></div>

        <div class="chatbox">
            <p>
                Hi, Jane! It’s 12:34 PM, and you are halfway through your classes for today. How are you feeling?
            </p>
            <div>
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                <div class="slidecontainer">
                    <div>😒</div>
                    <div>😔</div>
                    <div>😐</div>
                    <div>🙂</div>
                    <span>😀</span>
                </div>
                <button class="btn btn-sm btn-warning">Check In</button>
            </div>
        </div>
        <img src="img/tempdog.gif" width="300" alt="virtual pet"/>

        <div class="spacer"></div>
        <NavBar />
    </section>
    );
}