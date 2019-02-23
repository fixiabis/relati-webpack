import * as http from "http";
import * as express from "express";
import * as socketIO from "socket.io";

var webServer = express();
var server = http.createServer(webServer);
server.listen(80);
var socketServer = socketIO(server);

socketServer.on("connection", function (socket) {
    
});