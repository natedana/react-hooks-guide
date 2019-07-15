import React, { useContext } from 'react';
import './page.css';

import { TestContext } from '../util'

import { Link } from 'react-router-dom'

const Basics: React.FC = () => {
    // useContext
    // - extract value from react context
    const context = useContext(TestContext)
  
    return (
        <div className="page">
            <div className="title">useContext</div>
            <div className="content">
                <div>
                    Context: { context }
                </div>
            </div>
            <Link to="/">Back</Link>
        </div>
    );
}

export default Basics;
