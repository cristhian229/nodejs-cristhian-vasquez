import { Request, Response } from 'express';
import { container } from 'tsyringe';
import OrderService from '../services/orderService';

export default class OrderController {
    static async getAllOrders(req: Request, res: Response) {
        const orderService = container.resolve(OrderService);
        const orders = await orderService.getAllOrders();
        res.json(orders);
    }

    static async getOrdersById(req: Request, res: Response) {
        const orderService = container.resolve(OrderService);
        const order = await orderService.getOrderById(parseInt(req.params.id));
        res.json(order);
    }

    static async getOrdersByUserId(req: Request, res: Response) {
        const orderService = container.resolve(OrderService);
        const orders = await orderService.getOrderByUserId(parseInt(req.params.userId));
        res.json(orders);
    }

    static async createOrder(req: Request, res: Response) {
        const orderService = container.resolve(OrderService);
        const order = await orderService.createOrder(req.body);
        res.status(201).json(order);
    }

    static async updateOrder(req: Request, res: Response){
        const orderService = container.resolve(OrderService);
        const id = parseInt(req.params.id);
        const order = req.body;
        try{
            const [affectedCount] = await orderService.updateOrder(id, order);
            if(affectedCount === 0){
                res.status(404).json({
                    status: 404,
                    message: 'order not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'order updated'
            });

        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }
    }

    static async deleteOrder(req: Request, res: Response){
        const orderService = container.resolve(OrderService);
        const id = parseInt(req.params.id);
        try{
            const deletedCount = await orderService.deleteOrder(id);
            if(deletedCount === 0){
                res.status(404).json({
                    status: 404,
                    message: 'order not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'order deleted'
            });

        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }
    }
}