"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const config_1 = require("./util/config");
const db_1 = require("./util/db");
const server = http_1.default.createServer(app_1.default);
server.listen(config_1.PORT, async () => {
    await (0, db_1.connectToDatabase)();
    console.log(`Server running on port ${config_1.PORT}`);
});
