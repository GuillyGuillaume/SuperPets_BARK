import React from 'react';
import { NavBar } from './Navigation';

function AboutUsDetails() {
    return (
        <div className="aboutUs-text">
            <h1>Who We Are</h1>
            <ul>
                <h3><strong>Overview</strong></h3>
                <p className="details">
                    Prima justo dolores te eam. Vim et paulo consequuntur. Usu an vero soleat principes, et iriure graecis has. Senserit consectetuer in vix, dicat audire qualisque ad duo. Facilis offendit instructior et has, atqui tollit noluisse at mei. Quidam vivendum incorrupte ut nec, audire euismod in nec, brute consetetur nam te.
                </p>
                <h3><strong>Problem Space</strong></h3>
                <p className="details">
                    Prima justo dolores te eam. Vim et paulo consequuntur. Usu an vero soleat principes, et iriure graecis has. Senserit consectetuer in vix, dicat audire qualisque ad duo. Facilis offendit instructior et has, atqui tollit noluisse at mei. Quidam vivendum incorrupte ut nec, audire euismod in nec, brute consetetur nam te.
                </p>
            </ul>
            <h1> BARK!'s Solution</h1>
            <ul>
                <p className="details">
                    Prima justo dolores te eam. Vim et paulo consequuntur. Usu an vero soleat principes, et iriure graecis has. 
                    Senserit consectetuer in vix, dicat audire qualisque ad duo. Facilis offendit instructior et has, 
                    atqui tollit noluisse at mei. Quidam vivendum incorrupte ut nec, audire euismod in nec, brute consetetur nam te.
                </p>
            </ul>
            <h1>Meet The Team</h1>
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
                    <img src="img/user-avatar.png" alt="profile pic" />
                    <p></p>
                    <p><strong>Taylor Jackson</strong></p>
                    <p>Pronouns:</p>
                    <p>Email:</p>
                    <p>Roles:</p>
                </div>
                <div className="team-card">
                    <img src="img/user-avatar.png" alt="profile pic" />
                    <p></p>
                    <p><strong>Wenyi Sun</strong></p>
                    <p>Pronouns:</p>
                    <p>Email:</p>
                    <p>Roles:</p>
                </div>
                <div className="team-card">
                    <img src="img/user-avatar.png" alt="profile pic" />
                    <p></p>
                    <p><strong>Jenna Wapstra</strong></p>
                    <p>Pronouns:</p>
                    <p>Email:</p>
                    <p>Roles:</p>
                </div>
                <div className="team-card">
                    <img src="img/WilliamPFP.jpg" alt="profile pic" />
                    <p></p>
                    <p><strong>William Zhang</strong></p>
                    <p>Pronouns: he/him</p>
                    <p>Email: wzhang26@uw.edu</p>
                    <p>Roles: front/back end Dev</p>
                </div>
            </div>

            <div className="spacer"></div>
            <NavBar />
        </section>
    );
  }