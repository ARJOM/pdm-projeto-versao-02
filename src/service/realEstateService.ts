import RealEstateInterface from '../interfaces/RealEstateInterface';
import RealEstate from '../model/RealEstate';

class RealEstateService{

    static async save(realEstate: RealEstateInterface) {
        const newRealEstate = new RealEstate(realEstate)
        return await newRealEstate.save();
    }

    static async list() {
        return await RealEstate.findAll();
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

}

export default RealEstateService;