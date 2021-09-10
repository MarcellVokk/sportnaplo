import '../CSS/Test.css';
import { useHistory } from 'react-router-dom';
import React, {useState} from 'react'

export default () => {
    const [data, setData] = useState(null);

    function getData(val) {
        setData(val.target.value);
    }
    
    const history = useHistory();
    var wsUri = "ws://sportnaplo.herokuapp.com/";
    var websocket;

    return (
        <div className="test">
            <button onClick={() => history.push('/test')}>Test</button>
            <input type="text" onChange={getData}></input>
            <button onClick={() => send(data)}>send</button>
        </div>
    );

    function send(message) {
        websocket = new WebSocket(wsUri);

        websocket.onopen = function (e) {
            websocket.send(message);
        };

        websocket.onerror = function (e) {
            console.log("ERROR: " + e.data);
        };
    }
}