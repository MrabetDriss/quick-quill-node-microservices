const UserDaoImplement = require("../dao/UserDaoImplement");


class QuickQuillServiceDefault {
    
    constructor(userDao) { 
        this.userDao = userDao;
    }

    getUserByEmail(user, callBack) {
        this.userDao.selectByEmail(user, callBack);
    }
}

const userDao = new UserDaoImplement();
module.exports = new QuickQuillServiceDefault(userDao);