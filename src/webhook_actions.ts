
import { welcome } from "./intents/welcome"

import { fail } from "./intents/fail"
import { dialogflow } from "actions-on-google";

exports.webhook_actions = (request: Express.Request, response: Express.Response) => {
    const app = dialogflow({ debug: false });
    app.intent('Default Welcome Intent', (conv) => { // must not be async for i18n
        conv.ask(welcome());
    });
    app.intent('Default Fallback Intent', (conv) => { // must not be async for i18n
        conv.ask(fail());
    });
    app(request, response)
}