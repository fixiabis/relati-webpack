(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "http", "express", "socket.io"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var http = require("http");
    var express = require("express");
    var socketIO = require("socket.io");
    var webServer = express();
    var server = http.createServer(webServer);
    server.listen(80);
    var socketServer = socketIO(server);
    socketServer.on("connection", function (socket) {
    });
});
