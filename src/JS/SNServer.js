var publicIp = "94.21.48.237";
var port = "81";
var wsUri = "ws://" + publicIp + ":" + port + "/snnetworking";
var websocket;

function send(message) {
    websocket = new WebSocket(wsUri);

    websocket.onopen = () => {
        console.log("open");
    }

    websocket.onopen = function (e) {
        console.log("Request sent!");
        websocket.send(message);
    };

    websocket.onmessage = function (e) {
        console.log(e.message);
    }

    websocket.onerror = function (e) {
        console.log("ERROR: " + e.data);
    };
}

export default send