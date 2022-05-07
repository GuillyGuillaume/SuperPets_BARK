import React, { useState } from 'react';
import _ from 'lodash';
import { getDatabase, ref, onValue } from 'firebase/database'


export function ESAQ() {
   
    const [score, setScore] = useState(0);
    const updateScore = function (event) {
        setScore(score+event.target.value)
        
    }

    const returnScore = function () {
        console.log(score);
        return score;
    }
    return (
        <div className="ESATable">
            <table>
                <thead>
                    <tr>
                        <th> </th>
                        <th>Not at all</th>
                        <th>Several days</th>
                        <th>More than half the days </th>
                        <th>Nearly every day </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1. Little interest or pleasure in doing things</td>
                        <td><input onSelect={updateScore} type="radio" name="Q1" value= "0" /></td>
                        <td><input onSelect={updateScore} type="radio" name="Q1" value="1"/></td>
                        <td><input onSelect={updateScore} type="radio" name="Q1" value="2"/></td>
                        <td><input onSelect={updateScore} type="radio" name="Q1" value="3"/></td>
                    </tr>
                    <tr>
                        <td>2. Feeling down, depressed, or hopeless</td>
                        <td><input onSelect={updateScore} type="radio" name="Q2" value="0"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q2" value="1"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q2" value="2"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q2" value="3"></input></td>
                    </tr>
                    <tr>
                        <td>3. Trouble falling or staying asleep, or sleeping too much</td>
                        <td><input onSelect={updateScore} type="radio" name="Q3" value="0"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q3" value="1"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q3" value="2"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q3" value="3"></input></td>
                    </tr>
                    <tr>
                        <td>4. Feeling tired or having little energy</td>
                        <td><input onSelect={updateScore} type="radio" name="Q4" value="0"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q4" value="1"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q4" value="2"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q4" value="3"></input></td>
                    </tr>
                    <tr>
                        <td>5. Poor appetite or overeating</td>
                        <td><input onSelect={updateScore} type="radio" name="Q5" value="0"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q5" value="1"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q5" value="2"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q5" value="3"></input></td>
                    </tr>
                    <tr>
                        <td>6. Feeling bad about yourself or that you are a failure or
have let yourself or your family down</td>
                        <td><input onSelect={updateScore} type="radio" name="Q6" value="0"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q6" value="1"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q6" value="2"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q6" value="3"></input></td>
                    </tr>
                    <tr>
                        <td>7. Trouble concentrating on things, such as reading the
newspaper or watching television</td>
                        <td><input onSelect={updateScore} type="radio" name="Q7" value="0"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q7" value="1"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q7" value="2"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q7" value="3"></input></td>
                    </tr>
                    <tr>
                        <td>8. Moving or speaking so slowly that other people could
                        have noticed. Or the opposite being so figety or
                        restless that you have been moving around a lot more
than usual</td>
                        <td><input onSelect={updateScore} type="radio" name="Q8" value="0"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q8" value="1"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q8" value="2"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q8" value="3"></input></td>
                    </tr>
                    <tr>
                        <td>9.Thoughts that you would be better off dead, or of
hurting yourself</td>
                        <td><input onSelect={updateScore} type="radio" name="Q9" value="0"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q9" value="1"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q9" value="2"></input></td>
                        <td><input onSelect={updateScore} type="radio" name="Q9" value="3"></input></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={returnScore}>Submit</button>
        </div>
    )
}
