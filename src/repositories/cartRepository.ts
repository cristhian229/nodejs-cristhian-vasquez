import { injectable } from "tsyringe";
import CartModel from "../models/cartModel";
import { Carts } from "../interfaces/cart";


@injectable()
export default class CartRepository {
    async findAll(): Promise<Carts[]>{
        return await CartModel.findAll();
    }

    async findById(id: number): Promise<Carts | null>{
        return await CartModel.findByPk(id);
    }

    async create(cart: Partial<Carts>): Promise<Carts>{
       return await CartModel.create(cart as CartModel);
    }

    async update(id: number, cart: Partial<Carts>): Promise<[number]>{
        return await CartModel.update(cart, {where: {id}});
    }

    async delete(id: number): Promise<number>{
        return await CartModel.destroy({where: {id}});
    }


}