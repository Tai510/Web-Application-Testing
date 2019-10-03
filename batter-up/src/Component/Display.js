import React, {useState} from 'react';

function Display() {
 
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [foul, setFoul] = useState(0);
    const [hit, setHit] = useState(['Strike', 'Ball', 'Foul']);

    return (
    <div>
        <div>
            <h1>Ball : {ball}</h1>
            <h1>Strike : {strike}</h1>
            <h2>Foul : {foul}</h2>
        </div>
        <div className='dashBoard'>
            <div>
                <button onClick={() => {
                    setStrike(strike + 1)
                }}>Strike</button>
                <button onClick={() => {
                    setBall(ball + 1)
                }}>Ball</button>
                <button onClick={() => {
                    setFoul(foul + 1)
                }}>Foul</button>
                <button>Hit</button>
            </div>
        </div> {/* dashBoard end  */}
    </div>
    )
}

export default Display;