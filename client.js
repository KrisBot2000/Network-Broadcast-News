const net = require('net');

const options = {
  host: "localhost",
  port: 6969
};

const clientConnection = new net.createConnection(options, function(){
  console.log("client connected");

  process.stdin.on('data', function(data){
    clientConnection.write(data);
  });

  clientConnection.on('data', function(data){
    console.log(data.toString());
  });


});
