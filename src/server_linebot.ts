
import { MongoDbStorage } from "botbuilder-mongodb-storage"
var { mongodb_url } = require("./const");
var builder = require("botbuilder")
var LineConnector = require("botbuilder-linebot-connector");

var { channelId, channelSecret, channelAccessToken } = require("./const")

export const connector = new LineConnector.LineConnector({
    hasPushApi: false, //you have to pay for push api >.,<
    autoGetUserProfile: true, //default is false
    // your line
    channelId,
    channelSecret,
    channelAccessToken
});

console.log("mongodb_url", mongodb_url)
var bot = new builder.UniversalBot(connector)
    .set("storage", new MongoDbStorage({
        DatabaseName: "bot",
        collectionName: "botState",
        mongoIp: (mongodb_url === 'mongodb://localhost:27017') ? "localhost" : "mongo",
        mongoPort: "27017",
    }));

bot.dialog("/", [
    (s: any) => {
        builder.Prompts.text(s, "go");
    },
    (s: any, r: any) => {
        s.send("oh!" + r.response)
        s.endDialog()
    }
])
