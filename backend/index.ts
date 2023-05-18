import app from "./app"
import http from "http"
import { PORT } from './util/config';

import { connectToDatabase } from './util/db';

const server = http.createServer(app)

server.listen(PORT, async () => {
    await connectToDatabase();
	console.log(`Server running on port ${PORT}`);
})