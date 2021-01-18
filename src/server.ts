import { Server } from "http";
import app from "./app";

/**
 * Start Express server.
 */

const server = new Server(app);

server.listen(process.env.PORT || 3000, () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        process.env.PORT || 3000,
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});
