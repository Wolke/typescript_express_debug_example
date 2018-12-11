"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var main_1 = require("./main");
var port = process.env.PORT || 3000;
express()
    .get("/", function (req, rep) {
    console.log("req.headers['x-forwarded-for']", req.rawHeaders);
    var msg = "hello!";
    rep.end(msg);
})
    .use("/dialogflowFulfillment", bodyParser.json(), main_1.dialogflowFulfillment)
    .listen(port, function () { return console.log("run port " + port); });
