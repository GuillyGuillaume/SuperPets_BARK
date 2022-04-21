import React from 'react';
import { NavBar } from './Navigation';

function AboutUsDetails() {
    return (
        <div className="aboutUs-text">
            <h2>Who We Are</h2>
            <ul>
                <h3>Overview</h3>
                <p className="details">
                    Prima justo dolores te eam. Vim et paulo consequuntur. Usu an vero soleat principes, et iriure graecis has. Senserit consectetuer in vix, dicat audire qualisque ad duo. Facilis offendit instructior et has, atqui tollit noluisse at mei. Quidam vivendum incorrupte ut nec, audire euismod in nec, brute consetetur nam te.
                </p>
                <h3>Problem Space</h3>
                <p className="details">
                    Prima justo dolores te eam. Vim et paulo consequuntur. Usu an vero soleat principes, et iriure graecis has. Senserit consectetuer in vix, dicat audire qualisque ad duo. Facilis offendit instructior et has, atqui tollit noluisse at mei. Quidam vivendum incorrupte ut nec, audire euismod in nec, brute consetetur nam te.
                </p>
            </ul>
            <h2> BARK!'s Solution</h2>
            <ul>
                <p className="details">
                    Prima justo dolores te eam. Vim et paulo consequuntur. Usu an vero soleat principes, et iriure graecis has. 
                    Senserit consectetuer in vix, dicat audire qualisque ad duo. Facilis offendit instructior et has, 
                    atqui tollit noluisse at mei. Quidam vivendum incorrupte ut nec, audire euismod in nec, brute consetetur nam te.
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