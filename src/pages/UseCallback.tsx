import React, { useState, useCallback } from 'react';
import './page.css';

import { intenseFn } from '../util'

import { Link } from 'react-router-dom'

const UseState: React.FC = () => {
    // useCallback
    const [input, setInput] = useState(0)
    const [result, setResult] = useState(0)
    const [time, setTime] = useState(0)

    const callback = (val: number) => {
        const t1 = new Date().getTime()
        const result = intenseFn(val)
        const t2 = new Date().getTime()
        setTime(t2 - t1)
        setResult(result)
        return result
    }

    const memoizedCallback = useCallback(callback, [input])
    
    return (
        <div className="page">
            <div className="title">useCallback</div>
            <div className="content">
                <div>
                    The input is: { input }
                    <button onClick={() => setInput(n => n + 1)}>+</button>
                    <button onClick={() => setInput(n => n - 1)}>-</button>
                </div>
                <div>
                    <button onClick={ () => callback(input) }>Run without memo</button>
                    <button onClick={ () => memoizedCallback(input) }>Run with memo</button>
                </div>
                <div>
                    The result is: { result }
                </div>
                <div>
                    The time is: { time }
                </div>
            </div>
            <Link to="/">Back</Link>
        </div>
    );
}

export default UseState;
