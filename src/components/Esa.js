import { getDatabase, ref, onValue } from 'firebase/database';
import React, { useEffect } from 'react';
import { getAuth } from "firebase/auth";

export function EsaScreen() {
    const [currPet, setPet] = React.useState("");
    const [currTalkPet, setTalkPet] = React.useState("");
    const [dayCycle, setDayCycle] = React.useState(true);
    const [qOne, setqOne] = React.useState(0);
    const [qTwo, setqTwo] = React.useState(0);
    const [qThree, setqThree] = React.useState(0);
    const [qFour, setqFour] = React.useState(0);
    const [qFive, setqFive] = React.useState(0);
    const [response, setResponse] = React.useState();
    const db = getDatabase();
    const auth = getAuth();
    const todayDate = new Date();

    useEffect(() => {
        const petRef = ref(db, "users/"+auth.currentUser.uid+"/pet") //  dir/key for reference
        //addEventListener for database value change
        const offFunction = onValue(petRef, (snapshot) => {
            let newValue = snapshot.val(); //extract the value from snapshot
            setPet(newValue);
            setTalkPet("talk_" + newValue);
            if(todayDate.getHours() > 20){
                setPet("sleep_" + newValue);
                setDayCycle(false);
            }
        });
        return () => {
            offFunction();
        }
    }, []);

    const ansOne = function (event) {
        setqOne(event.target.value);
    }
    const ansTwo = function (event) {
        setqTwo(event.target.value);
    }
    const ansThree = function (event) {
        setqThree(event.target.value);
    }
    const ansFour = function (event) {
        setqFour(event.target.value);
    }
    const ansFive = function (event) {
        setqFive(event.target.value);
    }
    function quizSubmit() {
        const score = (qOne*1 + qTwo*1 + qThree*1 + qFour*1 + qFive*1);
        if(score > 7){
            setResponse(
                <div className="chatbox">
                    <p>
                        You are experiencing severe depression, we highly recommend you to talk with a counselor and have an ESA
                    </p>
                </div>
            )
        } else if(score > 4){
            setResponse(
                <div className="chatbox">
                    <p>
                        You are experiencing mild and moderate depression, we recommend you to have a ESA if your problem is continuing
                    </p>
                </div>
            )
        } else {
            setResponse(
                <div className="chatbox">
                    <p>
                        You have minimal depression, and it's better for you to talk with people you trusted, do some exercise.
                    </p>
                </div>
            )
        }
        if(todayDate.getHours() < 20){
            setPet(currTalkPet);
            setTimeout(function(){
                setPet(currPet);
            }, 500); 
        }
    }

    return (
        <section className={dayCycle ? "content-box-day" : "content-box-night"}>
            <h1 className="page-title">ESA Survey</h1>
            <div className="aboutUs-text">
                <h1>Are you in need of an Emotional Support Animal?</h1>
                <p className="details">
                    Emotional Support Animal support animals provide companionship,
                    relieve loneliness, and sometimes help with depression, anxiety,
                    and certain phobias, but do not have special training to perform
                    tasks that assist people with disabilities.
                </p>
            </div>

            <div  className="ESA-content">
                <div className="ESAquiz">
                    <p className="quiz-b"><strong>Questions MILD-SEVERE (1-3)</strong></p>
                    <div className="gap"></div>
                    <p className="quiz-b">1&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;</p>
                </div>
                <div className="ESAquiz">
                    <p className="quiz-b">Do you have mental health issues?</p>
                    <div className="gap"></div>
                    <p className="quiz-b"><input onClick={ansOne} type="radio" name="Q1" value='0' ></input></p>
                    <p className="quiz-b"><input onClick={ansOne} type="radio" name="Q1" value='1' ></input></p>
                    <p className="quiz-b"><input onClick={ansOne} type="radio" name="Q1" value='2' ></input></p>
                </div>
                <div className="ESAquiz">
                    <p className="quiz-b">Do you have ptsd?</p>
                    <div className="gap"></div>

                    <p className="quiz-b"><input onClick={ansTwo} type="radio" name="Q2" value='0' ></input></p>
                    <p className="quiz-b"><input onClick={ansTwo} type="radio" name="Q2" value='1' ></input></p>
                    <p className="quiz-b"><input onClick={ansTwo} type="radio" name="Q2" value='2' ></input></p>
                </div>
                <div className="ESAquiz">
                    <p className="quiz-b">Do you show signs of OCD?</p>
                    <div className="gap"></div>

                    <p className="quiz-b"><input onClick={ansThree} type="radio" name="Q3" value='0' ></input></p>
                    <p className="quiz-b"><input onClick={ansThree} type="radio" name="Q3" value='1' ></input></p>
                    <p className="quiz-b"><input onClick={ansThree} type="radio" name="Q3" value='2' ></input></p>
                </div>
                <div className="ESAquiz">
                    <p className="quiz-b">Have you experienced memory or concentration issues?</p>
                    <div className="gap"></div>

                    <p className="quiz-b"><input onClick={ansFour} type="radio" name="Q4" value='0' ></input></p>
                    <p className="quiz-b"><input onClick={ansFour} type="radio" name="Q4" value='1' ></input></p>
                    <p className="quiz-b"><input onClick={ansFour} type="radio" name="Q4" value='2' ></input></p>
                </div>
                <div className="ESAquiz">
                    <p className="quiz-b">Do you feel extremely lonely at times?</p>
                    <div className="gap"></div>

                    <p className="quiz-b"><input onClick={ansFive} type="radio" name="Q5" value='0' ></input></p>
                    <p className="quiz-b"><input onClick={ansFive} type="radio" name="Q5" value='1' ></input></p>
                    <p className="quiz-b"><input onClick={ansFive} type="radio" name="Q5" value='2' ></input></p>
                </div>
                <button className="btn btn-warning" onClick={quizSubmit}>Submit</button>
            </div>

            {response}
            <img src={'img/' + currPet} width='300'/>
            <div className="spacer"></div>
        </section>
    );
}