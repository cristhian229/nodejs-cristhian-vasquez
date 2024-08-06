import { injectable, inject } from 'tsyringe';
import CartRepository from '../repositories/cartRepository';
import { CreationAttributes } from 'sequelize';
import CartModel from '../models/cartModel';

@injectable()
export default class CartService {
    constructor(
        @inject(CartRepository) private cartRepository: CartRepository
    ) {}

    async getAllCarts() {
        return await this.cartRepository.findAll();
    }

    async getCartById(id: number) {
        return await this.cartRepository.findById(id);
    }

    async createCart(cart: CreationAttributes<CartModel>) {
        return await this.cartRepository.create(cart);
    }

    async updateCart(id: number, cart: any): Promise<any> {
        return await this.cartRepository.update(id, cart);
    }

    async deleteCart(id: number): Promise<any> {
        return await this.cartRepository.delete(id);
    }
}