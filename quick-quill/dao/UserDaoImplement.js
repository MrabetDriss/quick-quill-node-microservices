const UserDao = require('./UserDao');
const db = require('./database/Database');

class UserDaoImplement extends UserDao {

    constructor() {
        super();
    }

    selectByEmail(user, callBack) {
        db.selectByKeyword(email, callBack);
    }

}

module.exports =  UserDaoImplement;