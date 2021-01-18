import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import lusca from "lusca";
import cors from "cors";

// Create Express server
const app = express();
export default app;

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(cors());

// Import All routes

import "./routes";
