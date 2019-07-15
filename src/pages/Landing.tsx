import React from 'react';
import '../App.css';
import logo from '../logo.svg';

import { Link } from 'react-router-dom'

const Landing: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p> React Hooks  </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
                <ul>
                    <li><Link to="/state">useState</Link></li>
                    <li><Link to="/context">useContext</Link></li>
                    <li><Link to="/effect">useEffect</Link></li>
                    <li><Link to="/callback">useCallback</Link></li>
                    <li><Link to="/ref">useRef</Link></li>
                    <li><Link to="/router">useRouter</Link></li>
                    <li><Link to="/input">useInputValue</Link></li>
                    <li><Link to="/api">useApi</Link></li>
                    <li><Link to="/apidata">useApidata</Link></li>
                </ul>
            </header>
        </div>
    );
}

export default Landing;
