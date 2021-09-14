import '../CSS/Test.css';
import { useHistory } from 'react-router-dom';
import React from 'react'

export default () => {
    const history = useHistory();

    return (
        <div className="test">
            <a>Sportnapló</a>
            <button onClick={() => history.push('/login')}>Bejelentkezés</button>
            <button onClick={() => history.push('/register')}>Regisztráció</button>
        </div>
    );
}