import express from "express";
import { sequelize } from "./db";
import { NextFunction } from "express";


const errorHandler = (error: any, req: any, res: any, next: NextFunction) => {
    
    if (error.errors !== undefined) {
        console.log(error.errors[0].message)
        return res.status(400).send({ error: error.errors[0].message })
    }
    
    else {
        //console.log(error)
        return res.status(400).send( { error } )
    }
    
}

export default errorHandler;