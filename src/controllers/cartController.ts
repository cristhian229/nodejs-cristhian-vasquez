import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CartService from '../services/cartService';

export default class CartController {
    static async getAllCarts(req: Request, res: Response) {
        const cartService = container.resolve(CartService);
        const carts = await cartService.getAllCarts();
        res.json(carts);
    }

    static async getCartById(req: Request, res: Response) {
        const cartService = container.resolve(CartService);
        const cart = await cartService.getCartById(parseInt(req.params.id));
        res.json(cart);
    }


    static async createCart(req: Request, res: Response) {
        const cartService = container.resolve(CartService);
        const cart = await cartService.createCart(req.body);
        res.status(201).json(cart);
    }

    static async updateCart(req: Request, res: Response){
        const cartService = container.resolve(CartService);
        const id = parseInt(req.params.id);
        const cart = req.body;
        try{
            const [affectedCount] = await cartService.updateCart(id, cart);
            if(affectedCount === 0){
                res.status(404).json({
                    status: 404,
                    message: 'cart not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'cart updated'
            });

        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }
    }

    static async deleteCart(req: Request, res: Response){
        const cartService = container.resolve(CartService);
        const id = parseInt(req.params.id);
        try{
            const deletedCount = await cartService.deleteCart(id);
            if(deletedCount === 0){
                res.status(404).json({
                    status: 404,
                    message: 'cart not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'cart deleted'
            });

        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }
    }
}