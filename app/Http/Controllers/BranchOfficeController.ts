import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export class BranchOfficeController {

    getEvent = async (req: Request, res: Response): Promise<any> => {
        console.log('Usuario conectado');

        // Escucha el evento 'sale.created'
        socket.on('sale.created', (data) => {
            console.log('Venta creada:', data);

            // Aquí puedes almacenar los datos en MongoDB Atlas
            // Utiliza la biblioteca 'mongodb' para conectarte y guardar datos
        });
    };

}
