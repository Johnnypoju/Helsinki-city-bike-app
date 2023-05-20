"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.DATABASE_URL = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.DATABASE_URL = process.env.DATABASE_URL;
exports.PORT = process.env.PORT;
