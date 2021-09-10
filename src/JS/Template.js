import '../CSS/Test.css';
import { useHistory } from 'react-router-dom';
import React, {useState} from 'react'
import send from './SNServer'

export default () => {
    const [data, setData] = useState(null);

    function getData(val) {
        setData(val.target.value);
    }

    const history = useHistory();

    return (
        <div className="test">
            <button onClick={() => history.push('/')}>Home</button>
            <h1>{data}</h1>
            <input type="text" onChange={getData}></input>
            <button onClick={() => send(data)}>send</button>
        </div>
    );
}