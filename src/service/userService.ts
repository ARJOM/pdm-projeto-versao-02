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

    static async getById(id: number){
        return await User.findOne({where: {id}})
    }

    static async update(id: number, updatedUser: UserInterface){
        return await User.update(updatedUser, {where: {id}});
    }
    
    static async delete(id: number){
        return await User.update({ isActive: false }, {where: {id}});
    }

}

export default UserService;