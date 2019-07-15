import React, { useState, useEffect } from 'react';
import './page.css';

import { Link } from 'react-router-dom'

const Basics: React.FC = () => {
    // Use State
    const [number, setNumber] = useState(0)
    const [checked, setChecked] = useState(false)
    
    // useEffect
    // Substitute for didMount / didUpdate
    const rounded = Math.ceil(number * 0.1)
    
    // runs only when dependencies change
    useEffect(() => {
        if (checked) {
            alert('The rounded number has changed')
        }
    }, [checked, rounded])
    
    // runs every render 
    useEffect(() => {
        console.log("RENDER")
    })

    // runs only at initial render
    useEffect(() => {
        console.log("INITIAL RENDER")
    }, [])

    return (
        <div className="page">
            <div className="title">useEffect</div>
            <div className="content">
                <div>
                    <div>The number is: { number }</div>
                    <div>The trigger value is: { rounded }</div>
                    <button onClick={() => setNumber(n => n + 1)}>+</button>
                    <button onClick={() => setNumber(n => n - 1)}>-</button>
                    <div><input type="checkbox" onChange={e => setChecked(e.target.checked)}/>Alert on change</div>
                </div>
            </div>
            <Link to="/">Back</Link>
        </div>
    );
}

export default Basics;
