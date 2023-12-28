const express = require('express');
const cors = require('cors');
const userRouter = require('./router/user-router');

class Server {
    constructor(port = 3000) {
        this.port = port;
        // 1. Création d'une instance du serveur express 
        this.app = express();

        this.config();
        this.routing();
    }

    config() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routing() {
        // Routage 
        this.app.use('/login', userRouter);        
    }

    start() {
        // 4. Démarrage du serveur 
        this.app.listen(this.port, ()=> {
            console.log('Serveur démarré...');
        })
    }
}

module.exports = Server;