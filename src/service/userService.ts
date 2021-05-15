import UserInterface from '../interfaces/UserInterface';
import User from '../model/User';

class UserService{

    static async save(user: UserInterface) {
        const newUser = new User(user)
        return await newUser.save();
    }

    static async list() {
        return await User.findAll();
    }
    
}

export default UserService;