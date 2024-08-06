import { injectable } from "tsyringe";
import { Users } from "../interfaces/users";
import UserModel from "../models/userModel";

@injectable()
export default class UserRepository {
    async findAll(): Promise<Users[]>{
        return await UserModel.findAll();
    }

    async findById(id: number): Promise<Users | null>{
        return await UserModel.findByPk(id);
    }

    async create(user: Partial<Users>): Promise<Users>{
       return await UserModel.create(user as UserModel);
    }

    async update(id: number, user: Partial<Users>): Promise<[number]>{
        return await UserModel.update(user, {where: {id}});
    }

    async delete(id: number): Promise<number>{
        return await UserModel.destroy({where: {id}});
    }


}