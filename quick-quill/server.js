const express = require('express');
const cors = require('cors');
const userRouter = require('./router/user-router');
const bodyParser = require('body-parser');

class Server {
    constructor(port = 3000) {
        this.port = port;
        // 1. Création d'une instance du serveur express 
        this.app = express();

        this.config();
        this.routing();
    }

    config() {
        this.app.use(cors({
            origin: 'http://localhost:3000', 
            credentials:true
        }));
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(express.json());
        this.app.options('/users/login', cors());
    }

    routing() {
        // Routage 
        this.app.use('/users', userRouter);
    }

    start() {
        // 4. Démarrage du serveur 
        this.app.listen(this.port, () => {
            console.log('Serveur démarré...');
        })
    }
}

module.exports = Server;