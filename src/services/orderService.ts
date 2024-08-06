import { CreationAttributes } from 'sequelize';
import { injectable, inject } from 'tsyringe';
import OrderRepository from '../repositories/orderRepository';
import OrderModel from '../models/orderModel';

@injectable()
export default class OrderService {
    constructor(
        @inject(OrderRepository) private orderRepository: OrderRepository
    ) {}

    async getAllOrders() {
        return await this.orderRepository.findAll();
    }

    async getOrderById(id: number) {
        return await this.orderRepository.findById(id);
    }

    async getOrderByUserId(userId: number) {
        return await this.orderRepository.findByUserId(userId);
    }

    async createOrder(order: CreationAttributes<OrderModel>) {
        return await this.orderRepository.create(order);
    }

    async updateOrder(id: number, order: any): Promise<any> {
        return await this.orderRepository.update(id, order);
    }

    async deleteOrder(id: number): Promise<any> {
        return await this.orderRepository.delete(id);
    }
}