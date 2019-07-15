import React, { useContext } from 'react';
import './page.css';

import { TestContext, apiGetFn } from '../util'

import { Link } from 'react-router-dom'
import { useApiData } from './UseApiData';


const useUser = (userId:string) => {
    const user = useApiData(() => apiGetFn(userId, false), [userId])

    
}

const Basics: React.FC = () => {
    // Use Context
    // extract value of context
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
