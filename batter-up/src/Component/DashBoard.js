import React from 'react';
import Display from './Display'

function DashBoard(strike, setStrike) {
    return (
        <div className='dashBoard'>
            <div>
                <button onClick={() => {
                    setStrike(strike + 1)
                }}>Strike</button>
                <button>Ball</button>
                <button>Foul</button>
                <button>Hit</button>
            </div>
        </div> /* dashBoard end */
    )
}

export default DashBoard;