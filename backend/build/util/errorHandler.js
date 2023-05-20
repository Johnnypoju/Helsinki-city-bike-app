"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (error, req, res, next) => {
    if (error.errors !== undefined) {
        console.log(error.errors[0].message);
        return res.status(400).send({ error: error.errors[0].message });
    }
    else {
        //console.log(error)
        return res.status(400).send({ error });
    }
};
exports.default = errorHandler;
