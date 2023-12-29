

class UserDao {

    constructor () {
        if(new.target == UserDao) {
            console.log('cannot be intanciated');
        }
    }

    selectByEmail(user) {
        console.log('should be implemented'); 
    }


}

module.exports = UserDao;