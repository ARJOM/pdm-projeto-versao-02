import UserInterface from '../interfaces/UserInterface';
import RealEstate from '../model/RealEstate';
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
        await User.update({ isActive: false }, { where: {id}});
        await User.findOne({ include: [RealEstate], where: {id} })
            .then(user => {
                if (user !== null){
                    user.realEstate.forEach(realEstate => {
                        realEstate.isActive = false;
                        realEstate.save();
                    });
                }
            });
        return {'msg': 'Usario removido'}
    }

}

export default UserService;