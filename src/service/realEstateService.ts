import { Op } from 'sequelize';
import RealEstateInterface from '../interfaces/RealEstateInterface';
import RealEstate from '../model/RealEstate';

class RealEstateService{

    static async save(realEstate: RealEstateInterface) {
        const newRealEstate = new RealEstate(realEstate)
        return await newRealEstate.save();
    }

    static async list() {
        return await RealEstate.findAll({where: {isActive: true}});
    }

    static async getById(id: number){
        return await RealEstate.findOne({where: {id}})
    }

    static async update(id: number, updatedRealEstate: RealEstateInterface){
        return await RealEstate.update(updatedRealEstate, {where: {id}});
    }
    
    static async delete(id: number){
        return await RealEstate.update({ isActive: false }, {where: {id}});
    }

    static async findByCity(cidade: string){
        return await RealEstate.findAll({where: {cidade, isActive: true}})
    }

    static async orderByPrice(minValue: number, maxValue: number){
        return await RealEstate.findAll({ 
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
        return await RealEstate.findAll({where: {userId, isActive: true}})
    }

}

export default RealEstateService;