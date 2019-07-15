import React, { useState } from 'react';
import './page.css';

import { Link } from 'react-router-dom'

interface AsyncHook {
    loading: boolean
    error: Error | undefined
    submit: () => any
}

export const useInputValue = (initialValue: string) => {
    // useInputValue
    // - wrapper for useState
    // - handles events for you
    const [value, setValue] = useState(initialValue);

    return {
        value,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value || e.target.innerText);
        }
    };
};

const UseApi: React.FC = () => {

    const name = useInputValue("")

    return (
        <div className="page">
            <div className="title">useInputValue</div>
            <div className="content">
                <div><input type="text" {...name}/></div>
            </div>
            <Link to="/">Back</Link>
        </div>
    );
}

export default UseApi;
