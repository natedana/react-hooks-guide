import React from 'react';
import './page.css';

import { Link } from 'react-router-dom'
import useRouter from 'use-react-router'

const UseRouter: React.FC = () => {
    // useRouter
    // - returns familiar react router objects
    const { match, location, history }= useRouter()
    
    const handleClick = () => {
        history.push("/")
    }

    return (
        <div className="page">
            <div className="title">useRouter</div>
            <div className="content">
                <div>The match path is: { match.path }</div>
                <div>The location pathname is: { location.pathname }</div>
                <button onClick={handleClick}>Go back to index</button>
            </div>
            <Link to="/">Back</Link>
        </div>
    );
}

export default UseRouter;
