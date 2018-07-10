var express = require("express");
var route = express();

route
    .use(express.static("./new"))
    .listen(process.env.PORT || 3000);