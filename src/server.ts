import *  as express from "express";
import * as bodyParser from "body-parser";
import { dialogflowFulfillment } from "./main"

const port = process.env.PORT || 3000;
express()
    .get("/", (req: express.Request, rep: express.Response) => {
        let msg = "hello";
        rep.end(msg)
    })
    .use("/dialogflowFulfillment", bodyParser.json(), dialogflowFulfillment)
    .listen(port, () => console.log(`run port ${port}`))