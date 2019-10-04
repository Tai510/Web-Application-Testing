import React, {useState} from 'react';
import './Batter.css'

function DashBoard() {
 
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [foul, setFoul] = useState(0);
    const [out, setOut] = useState(0);
    const [hit, setHit] = useState([]);
    const [toss, setToss] = useState([]);
    const [homescore, setHomeScore] = useState(0);
    const [awayscore, setAwayScore] = useState(0);
    var myArray = ['STRIKE', 'BALL', 'FOUL', 'HOME RUN !!!'];
    var coinToss = ['HEAD', 'TAIL'];

    return (
    <div className='Batter-Up'>
     
        <div className='coin-Toss'>
            <h2>Click the ball for a coin toss!</h2>
            <i onClick={() => {
                setToss(coinToss[Math.floor(Math.random() * coinToss.length)])
            }} class="fas fa-baseball-ball"></i>
            <h1 onClick={() => {
                setToss()
            }}>{toss}</h1>
        </div> {/* coin-Toss end */}
        
        <div className='header'>
            <h1>Batter Up</h1>
        </div> {/* header end */}

    <div className='scores'>

        <div className='home'>
                <span><h3>Home</h3></span>
                <h3>{homescore}</h3>

            <div className='plus-minus'>
                <button onClick={() => {
                    setHomeScore(homescore + 1)
                }}><i class="fas fa-plus"></i></button>
                <button onClick={() => {
                    setHomeScore(homescore - 1)
                }}><i class="fas fa-minus"></i></button>
            </div> {/* plus-minus end */}

        </div>  {/* home end */}

            <div className='result'>
                <h1 onClick={() => {
                setHit()
                }}>{hit}</h1>
            </div> {/* result end */}

        <div className='away'>
            <span><h3>Away</h3></span>
                <h3>{awayscore}</h3>

            <div className='plus-minus'>
                <button onClick={() => {
                    setAwayScore(awayscore + 1)
                }}><i class="fas fa-plus"></i></button>
                <button onClick={() => {
                    setAwayScore(awayscore - 1)
                }}><i class="fas fa-minus"></i></button>
            </div> {/* plus-minus end */}

        </div> {/* away end */}

    </div> {/* scores end */}

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
                <button id='play-Ball' onClick={() => {
                    setHit(myArray[Math.floor(Math.random() * myArray.length)])
                }}>Play Ball</button>
        </div> {/* dashBoard end  */}

    </div> /* Batter-Up end */
    )
}

export default DashBoard;