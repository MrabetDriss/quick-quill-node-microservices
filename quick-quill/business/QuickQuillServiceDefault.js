const UserDaoImplement = require("../dao/UserDaoImplement");


class QuickQuillServiceDefault {
    
    constructor(userDao) { 
        this.userDao = userDao;
    }

    getUserByEmail(email, callBack) {
        this.userDao.selectByEmail(email, callBack);
    }
}

const userDao = new UserDaoImplement();
module.exports = new QuickQuillServiceDefault(userDao);