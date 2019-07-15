import React, { useRef } from 'react';
import './page.css';


import { Link } from 'react-router-dom'

const UseState: React.FC = () => {
    // useRef
    // - in lieu of React.createRef()
    // - imaginary "box" free from render cycle
    // - can store value not reset (render count, mount status etc.)

    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        if (inputRef.current) {
            inputRef!.current!.focus()
        }
    }
    
    return (
        <div className="page">
            <div className="title">useRef</div>
            <div className="content">
                <div>
                    <button onClick={handleClick}>focus</button>
                </div>
                <div>
                    <input ref={inputRef}></input>
                </div>
            </div>
            <Link to="/">Back</Link>
        </div>
    );
}

export default UseState;
