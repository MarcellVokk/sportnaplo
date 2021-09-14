import '../CSS/Test.css';
import { useHistory } from 'react-router-dom';
import React, {useState} from 'react'
import send from './SNServer'

export default () => {
    const [username, setUsername] = useState(null);

    function getUsername(val) {
        setUsername(val.target.value);
    }

    const [password, setPassword] = useState(null);

    function getPassword(val) {
        setPassword(val.target.value);
    }

    const history = useHistory();

    return (
        <div className="test">
            <button onClick={() => history.push('/')}>Home</button>
            <a>Regisztráció</a>
            <input type="text" onChange={getUsername}></input>
            <input type="text" onChange={getPassword}></input>
            <button onClick={() => send("login " + username + " " + password)}>Login</button>
        </div>
    );
}