import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { getDatabase, ref, onValue } from 'firebase/database'
import { NavBar } from './Navigation';

export function EsaScreen() {
    
    const [currentFriends, setCurrentFriends] = useState([]);

    const db = getDatabase(); //get database address from firebase servers
    useEffect(() => {
        const testArrRef = ref(db, 'users/7qELoGdorpZrhc4OybVXzwO8mc93') //  dir/key for reference
        //addEventListener for database value change
        const offFunction = onValue(testArrRef, (snapshot) => {
        const allEvents = snapshot.val(); //extract the value from snapshot
        const eventKeyArray = Object.keys(allEvents);
        let eventsArray = eventKeyArray.map((eventKey) => {
            const theEvent = allEvents[eventKey];
            return theEvent;
        })
        setCurrentFriends(eventsArray);
        });
        return () => {
        offFunction();
        }
    }, []);
    console.log(currentFriends)

return (
    <section className="content-box">
            <h1 className="page-title">ESA Survey</h1>
            <div className="ESA-detail">
                <h1>Are you in need of an Emotional Support Animal?</h1>
                <p>
                    Emotional Support Animal support animals provide companionship, 
                    relieve loneliness, and sometimes help with depression, anxiety, 
                    and certain phobias, but do not have special training to perform 
                    tasks that assist people with disabilities.
                </p>
            </div>
            <iframe className="survey" src="https://docs.google.com/forms/d/e/1FAIpQLSe_jhw-GfKX2oK2QIP_kht1RcJ9iZpHzA9XydO6SKPNs1DyiQ/viewform?embedded=true">Loading…</iframe>
            
            <div className="spacer"></div>
            <NavBar />
        </section>
    );
}