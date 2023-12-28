const mysql = require('mysql');

class Database {

    constructor() { 
        let parmas = {
            host : 'localhost',
            database : 'quick-quill-db',
            user : 'root', 
            password : ''
        };
        this.db = mysql.createConnection(parmas);
        this.db.connect(err => {
            if(err) {
                console.log('Erreur : ', err.message);
            }
            else {
                console.log('Connexion bien établie...');
            } 
        })
    }


    selectByKeyword(user, callback) { 
        let query = 'SELECT * FROM user WHERE email = ? AND password = ?';
        this.db.query(query, [user.email,user.password], (err, result) => {
            if(err) {
                console.log('Error : ', err.message);
            } else {  
                callback({ data: result,error:'Not Found' });
            }
        });
    }

}

module.exports = new Database();