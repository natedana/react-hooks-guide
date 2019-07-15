import React, { useState } from 'react';
import './page.css';

import { Link } from 'react-router-dom'

const UseState: React.FC = () => {
    // Use State
    // - short hand for state control
    // - returns the value and a setter
    const [number, setNumber] = useState(0)
    
    return (
        <div className="page">
            <div className="title">useState</div>
            <div className="content">
                The number is: { number }
                <button onClick={() => setNumber(n => n + 1)}>+</button>
                <button onClick={() => setNumber(n => n - 1)}>-</button>
            </div>
            <Link to="/">Back</Link>
        </div>
    );
}

export default UseState;
