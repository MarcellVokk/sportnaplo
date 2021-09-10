var wsUri = "ws://193.110.61.31:81/snnetworking";
var websocket;

function send(message) {
    websocket = new WebSocket(wsUri);

    websocket.onopen = function (e) {
        console.log("a");
        websocket.send(message);
    };

    websocket.onerror = function (e) {
        console.log("ERROR: " + e.data);
    };
}

export default send