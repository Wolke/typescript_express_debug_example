
import { welcome } from "./intents/welcome"

import { fail } from "./intents/fail"
const { WebhookClient } = require('dialogflow-fulfillment');


exports.webhook_dialogflow = (request: Express.Request, response: Express.Response) => {
    const agent = new WebhookClient({ request, response });
    function wel() {
        agent.add(welcome());
    }

    function fallback() {
        agent.add(fail());
    }

    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', wel);
    intentMap.set('Default Fallback Intent', fallback);

    agent.handleRequest(intentMap);

}