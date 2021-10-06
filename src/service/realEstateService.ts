import { Op } from 'sequelize';
import RealEstateInterface from '../interfaces/RealEstateInterface';
import RealEstateQueryInterface from '../interfaces/RealEstateQueryInterface';
import RealEstate from '../model/RealEstate';
import User from '../model/User';

class RealEstateService{

    static async save(realEstate: RealEstateInterface) {
        const newRealEstate = new RealEstate(realEstate)
        return await newRealEstate.save();
    }

    static async list(params: RealEstateQueryInterface) {
        const { cidade, menorValor, maiorValor } = params;
        let result = await RealEstate.findAll({include: [User], where: {isActive: true}});
        
        if (cidade){
            result = result.filter(realEstate => realEstate.cidade == cidade);
        }

        if (menorValor && maiorValor){
            result = result
                        .filter(realEstate => realEstate.preco >= menorValor && realEstate.preco <= maiorValor)
                        .sort((firstRealEstate, secondRealEstate) => secondRealEstate.preco - firstRealEstate.preco) // Ordena pela diferença dos preços deixando o maior na frente
        }

        return result
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

    static async findByUser(userId: number){
        return await RealEstate.findAll({include: [User], where: {userId, isActive: true}})
    }

    // As funções abaixo não são necessárias desde que eram utilizadas para lidar com query parameters

    // static async findByCity(cidade: string){
    //     return await RealEstate.findAll({include: [User], where: {cidade, isActive: true}})
    // }

    // static async orderByPrice(minValue: number, maxValue: number){
    //     return await RealEstate.findAll({ 
    //         include: [User],
    //         where: {
    //             preco: {
    //                 [Op.gte]: minValue,
    //                 [Op.lte]: maxValue
    //             },
    //             isActive: true
    //         }, 
    //         order: ['preco']
    //     })
    // }

}

export default RealEstateService;