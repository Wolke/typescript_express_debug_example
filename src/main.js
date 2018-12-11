"use strict";
exports.__esModule = true;
var WebhookClient = require('dialogflow-fulfillment').WebhookClient;
var webhook_actions = require("./webhook_actions").webhook_actions;
var webhook_dialogflow = require("./webhook_dialogflow").webhook_dialogflow;
exports.dialogflowFulfillment = function (request, response) {
    var agent = new WebhookClient({ request: request, response: response });
    if (agent.requestSource === agent.ACTIONS_ON_GOOGLE) {
        webhook_actions(request, response);
    }
    else {
        webhook_dialogflow(request, response);
    }
};
