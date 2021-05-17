import { Op } from 'sequelize';
import RealEstateInterface from '../interfaces/RealEstateInterface';
import RealEstate from '../model/RealEstate';
import User from '../model/User';

class RealEstateService{

    static async save(realEstate: RealEstateInterface) {
        const newRealEstate = new RealEstate(realEstate)
        return await newRealEstate.save();
    }

    static async list() {
        return await RealEstate.findAll({include: [User], where: {isActive: true}});
    }

    static async getById(id: number){
        return await RealEstate.findOne({include: [User], where: {id}})
    }

    static async update(id: number, updatedRealEstate: RealEstateInterface){
        return await RealEstate.update(updatedRealEstate, {where: {id}});
    }
    
    static async delete(id: number){
        return await RealEstate.update({ isActive: false }, {where: {id}});
    }

    static async findByCity(cidade: string){
        return await RealEstate.findAll({include: [User], where: {cidade, isActive: true}})
    }

    static async orderByPrice(minValue: number, maxValue: number){
        return await RealEstate.findAll({ 
            include: [User],
            where: {
                preco: {
                    [Op.gte]: minValue,
                    [Op.lte]: maxValue
                },
                isActive: true
            }, 
            order: ['preco']
        })
    }

    static async findByUser(userId: number){
        return await RealEstate.findAll({include: [User], where: {userId, isActive: true}})
    }

}

export default RealEstateService;