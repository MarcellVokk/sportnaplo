var wsUri = "ws://sportnaplo.herokuapp.com/";
var websocket;

function send(message) {
    websocket = new WebSocket(wsUri);

    websocket.onopen = function (e) {
        websocket.send(message);
    };

    websocket.onerror = function (e) {
        console.log("ERROR: " + e.data);
    };
}

export default send