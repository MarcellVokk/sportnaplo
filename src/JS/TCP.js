const net = require("net");

const options = {
    port: 3001,
    host: "127.0.0.1"
};

const client = net.createConnection(options, () => {
    client.write('hello\r\n');
});

client.on('data', data => {
    console.log(data.toString());
    client.end();
});