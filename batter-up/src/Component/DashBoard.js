import React, {useState} from 'react';
import './Batter.css'

function DashBoard(props) {
 
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [foul, setFoul] = useState(0);
    const [homeOut, setHomeOut] = useState(0);
    const [awayOut, setAwayOut] = useState(0);
    const [hit, setHit] = useState([]);
    const [toss, setToss] = useState([]);
    const [homescore, setHomeScore] = useState(0);
    const [awayscore, setAwayScore] = useState(0);
    const [players1, setPlayers1] = useState('Player 1')
    const [players2, setPlayers2] = useState('Player 2')
    var myArray = ['STRIKE', 'BALL', 'FOUL', `${players1} HITS A HOME RUN !!!`];
    var coinToss = ['HEAD', 'TAIL'];  


    function p1HandleChange(e) {
        setPlayers1(e.target.value);
    }

    function p2HandleChange(e) {
        setPlayers1(e.target.value);
    }
   
    return (
    <div className='Batter-Up'>
     
     <div className='top-section'>
        <div className='coin-Toss'>
            <h2>Click the ball for a coin toss!</h2>
            <i onClick={() => {
                setToss(coinToss[Math.floor(Math.random() * coinToss.length)])
            }} class="fas fa-baseball-ball"></i>
            <h1 onClick={() => {
                setToss()
            }}>{toss}</h1>
        </div> {/* coin-Toss end */}

         <div className='Players'>
                <form>
                    <input onChange={p1HandleChange} value={players1}></input>
                    <input onChange={p2HandleChange} value={players2} name='player2'></input>
                </form>
         </div> {/* Players end */}
      </div>   
        
        <div className='header'>
            <p id='homeOut'>Home Out {homeOut}</p>
            <h1>Batter Up</h1>
            <p id='awayOut'>Away Out {awayOut}</p>
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

    <div className='status-Play'>
        <div className='at-Bat'>
            <h1>At Bat</h1>
            <h2>{players1}</h2>
        </div> {/* at-Bat end */}
        <div className='fielding'>
            <h1>Fielding</h1>
            <h2>{players2}</h2>
        </div> {/* fielding end */}
    </div> {/* status-Play end */}

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

        <div className='result'>
                <h1 onClick={() => {
                setHit()
                }}>{hit}</h1>
        </div> {/* result end */}

        <div className='display'>
            <h2 id='strike'>Strike</h2>
            <h1 onClick={() => {
                setStrike(0)
            }}>{strike}</h1>

            <h2 id='ball'>Ball</h2>
            <h1 onClick={() => {
                setBall(0)
            }}>{ball}</h1>

            <h2 id='foul'>Foul</h2>
            <h1 onClick={() => {
                setFoul(0)
            }}>{foul}</h1>
        </div> {/* display end */}

        <div className='dashBoard'>
                <button id='strike' onClick={() => {
                    for(var i = strike; i < 3; i++) {
                    setStrike(strike + 1)
                    }
                    if(strike === 2) {
                        setHomeOut(homeOut + 1);
                        setStrike(0);
                    }
                }}>Strike</button>
                <button id='ball' onClick={() => {
                    for(var i = ball; i < 4; i++) {
                    setBall(ball + 1)
                    }
                }}>Ball</button>
                <button id='foul' onClick={() => {
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