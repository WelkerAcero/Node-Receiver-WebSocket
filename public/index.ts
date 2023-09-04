import express, { Express } from "express";
import BodyParser from "body-parser";
import http from 'http';
import Pusher from 'pusher-js';

class MyServer {

    private _app: Express = express();
    private _server = http.createServer(this._app);
    private _port: number = this._app.get("PORT") || 3000;

    constructor() {
        this._app.use(express.json());
        this._app.use(BodyParser.urlencoded({ extended: true }));
    }

    //API ROUTES, se antepone el prefijo /api
    routes() {
        /*     this._app.use('/api', OBJ_INSTANCE); */
    }


    listen() {
        this.routes();
        this._app.listen(this._port, () => {
            console.log("Servidor WebSocket escuchando en el puerto:", this._port);
        });
    }

    eventLister() {
        let app = [];
        const io = require('socket.io')(this._server);
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
    }

}

new MyServer().eventLister();