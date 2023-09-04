import { Request, Response } from "express";
import dotenv from "dotenv";
/* import Pusher from 'pusher-js'; */
dotenv.config();

export class PruebaController {

    getEvent = async (req: Request, res: Response): Promise<any> => {
        /* 
        let app = [];
        Pusher.logToConsole = true;
        const pusher = new Pusher('97b0f3b45efabcda1987', {
            cluster: 'mt1',
        });


        pusher.connection.bind('connected', (data: any) => {
            console.log('Client connected');
        });

        const channel = pusher.subscribe('notification');
        channel.bind('my-event', function (notification: any) {
            app.push(JSON.stringify(notification));
        });
        */
    }; 

}
