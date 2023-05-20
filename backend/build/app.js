"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const routes_1 = __importDefault(require("./controllers/routes"));
const stations_1 = __importDefault(require("./controllers/stations"));
const errorHandler_1 = __importDefault(require("./util/errorHandler"));
app.use(express_1.default.json());
app.use('/api/routes', routes_1.default);
app.use('/api/stations', stations_1.default);
app.use(errorHandler_1.default);
exports.default = app;
