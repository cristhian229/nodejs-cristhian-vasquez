import { injectable } from "tsyringe";
import { Orders } from "../interfaces/orders";
import OrderModel from "../models/orderModel";

@injectable()
export default class OrderRepository {
    async findAll(): Promise<Orders[]>{
        return await OrderModel.findAll();
    }

    async findById(id: number): Promise<Orders | null>{
        return await OrderModel.findByPk(id);
    }

    async findByUserId(userId: number) {
        return await OrderModel.findAll({ where: { userId } });
    }

    async create(order: Partial<Orders>): Promise<Orders>{
       return await OrderModel.create(order as OrderModel);
    }

    async update(id: number, order: Partial<Orders>): Promise<[number]>{
        return await OrderModel.update(order, {where: {id}});
    }

    async delete(id: number): Promise<number>{
        return await OrderModel.destroy({where: {id}});
    }


}