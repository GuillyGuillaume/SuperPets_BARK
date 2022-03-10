import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { NavBar } from './Navigation';

export function PetScreen() {
return (
    <section className="content-box">
        <h1 className="page-title">Virtual Companions</h1>
        <div className="pets">
                <div className="pet-card">
                    <img src={'img/dog_1.png'}/>
                    <p></p>
                    <p>Name: BUDDY</p>
                    <button className="btn btn-sm btn-warning">Adopt!</button>
                </div>
                <div className="pet-card">
                <img src={'img/dog_2.png'}/>
                    <p></p>
                    <p>Name: ODIE</p>
                    <button className="btn btn-sm btn-warning">Adopt!</button>
                </div>
                <div className="pet-card">
                <img src={'img/dog_3.png'}/>
                    <p></p>
                    <p>Name: LEO</p>
                    <button className="btn btn-sm btn-warning">Adopt!</button>
                </div>
                <div className="pet-card">
                <img src={'img/dog_4.png'}/>
                    <p></p>
                    <p>Name: ARLO</p>
                    <button className="btn btn-sm btn-warning">Adopt!</button>
                </div>
                <div className="pet-card">
                    <img src={'img/dog_5.png'}/>
                    <p></p>
                    <p>Name: BRUCE</p>
                    <button className="btn btn-sm btn-warning">Adopt!</button>
                </div>
                <div className="pet-card">
                    <img src={'img/dog_6.png'}/>
                    <p></p>
                    <p>Name: AXEL</p>
                    <button className="btn btn-sm btn-warning">Adopt!</button>
                </div>
                <div className="pet-card">
                    <img src={'img/dog_7.png'}/>
                    <p></p>
                    <p>Name: BEAU</p>
                    <button className="btn btn-sm btn-warning">Adopt!</button>
                </div>
                <div className="pet-card">
                    <img src={'img/dog_8.png'}/>
                    <p></p>
                    <p>Name: BAXTER</p>
                    <button className="btn btn-sm btn-warning">Adopt!</button>
                </div>
            </div>
        <div className="spacer"></div>
        <NavBar />
    </section>
    );
}