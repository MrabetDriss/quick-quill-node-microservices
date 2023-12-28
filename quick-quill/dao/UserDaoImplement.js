const UserDao = require('./UserDao');
const db = require('./database/Database');

class UserDaoImplement extends UserDao {

    constructor() {
        super();
    }

    selectByEmail(email, callBack) {
        db.selectByKeyword(email, callBack);
    }

}

module.exports =  UserDaoImplement;