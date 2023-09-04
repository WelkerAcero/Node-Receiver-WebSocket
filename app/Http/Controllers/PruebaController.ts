import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export class PruebaController {

    getEvent = async (req: Request, res: Response): Promise<any> => {
        console.log('Usuario conectado');
    };

}
