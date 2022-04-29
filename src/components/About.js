import React from 'react';
import { NavBar } from './Navigation';

function AboutUsDetails() {
    return (
        <div className="aboutUs-text">
            <h2>Who We Are</h2>
            <ul>
                <h3>Overview</h3>
                <p className="details">
                    We are a group of undergraduate students at the University of Washington who value mental health, 
                    and decided to dedicate the cumulation of our education to developing a solution for mental wellness.
                </p>
                <h3>Problem Space</h3>
                <p className="details">
                    Mental health matters, and while emotional support animals are a great solution, 
                    they are not always accessible to everyone who might benefit from them. 
                    For one thing, live animals are expensive; they require a substantial amount of time and money. 
                    Also, scams are prevalent in the emotional support and service animal industry. 
                    The question we wanted to answer, as a team, is: 
                    How might individuals receive emotional support and companionship from an animal in an inexpensive, highly accessible, and low-maintenance way?
                </p>
            </ul>
            <h2> BARK!'s Solution</h2>
            <ul>
                <p className="details">
                    To achieve our goals of an animal-companion app that achieved emotional support in an inexpensive, accessible, and low-maintenance way, 
                    we decided to develop BARK! - a mobile-first web app that gives users a sense of companionship 
                    through simple interactions, mental check-ins, assistance with scheduling, and information about real emotional support animals.
                </p>
            </ul>
            <h2>Meet The Team</h2>
        </div>
    )
}

export function AboutScreen() {
    return (
        <section className="content-box">
            <h1 className="page-title">About Us</h1>
            <AboutUsDetails />
            <div className="aboutUs-cards">
                <div className="team-card">
                    <img src="img/TaylorPFP.jpg" alt="profile pic" />
                    <p></p>
                    <p><strong>Taylor Jackson</strong></p>
                    <p>Project Manager</p>
                </div>
                <div className="team-card">
                    <img src="img/WenyiPFP.jpeg" alt="profile pic" />
                    <p></p>
                    <p><strong>Wenyi Sun</strong></p>
                    <p>UI/UX Designer</p>
                </div>
                <div className="team-card">
                    <img src="img/JennaPFP.jpeg" alt="profile pic" />
                    <p></p>
                    <p><strong>Jenna Wapstra</strong></p>
                    <p>Researcher</p>
                </div>
                <div className="team-card">
                    <img src="img/WilliamPFP.jpg" alt="profile pic" />
                    <p></p>
                    <p><strong>William Zhang</strong></p>
                    <p>Full-Stack Dev</p>
                </div>
            </div>

            <div className="spacer"></div>
            <NavBar />
        </section>
    );
  }