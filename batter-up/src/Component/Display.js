import React, {useState} from 'react';
import './Batter.css'

function Display() {
 
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [foul, setFoul] = useState(0);
    const [hit, setHit] = useState([]);

    const [out, setOut] = useState(0);

    return (
    <div className='Batter-Up'>

        <div className='display'>
            <h1 onClick={() => {
                setStrike(0)
            }}>Strike : {strike}</h1>
            <h1 onClick={() => {
                setBall(0)
            }}>Ball : {ball}</h1>
            <h2 onClick={() => {
                setFoul(0)
            }}>Foul : {foul}</h2>
        </div> {/* display end */}

        <div className='dashBoard'>
                <button onClick={() => {
                    for(var i = strike; i < 3; i++) {
                    setStrike(strike + 1)
                    }
                }}>Strike</button>
                <button onClick={() => {
                    for(var i = ball; i < 4; i++) {
                    setBall(ball + 1)
                    }
                }}>Ball</button>
                <button onClick={() => {
                    for(var i = foul; i < 4; i++) {
                    setFoul(foul + 1)
                    }
                }}>Foul</button>
                <button>Hit</button>

        </div> {/* dashBoard end  */}

    </div> /* Batter-Up end */
    )
}

export default Display;