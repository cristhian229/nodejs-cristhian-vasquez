"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const cartService_1 = __importDefault(require("../services/cartService"));
class CartController {
    static async getAllCarts(req, res) {
        const cartService = tsyringe_1.container.resolve(cartService_1.default);
        const carts = await cartService.getAllCarts();
        res.json(carts);
    }
    static async getCartById(req, res) {
        const cartService = tsyringe_1.container.resolve(cartService_1.default);
        const cart = await cartService.getCartById(parseInt(req.params.id));
        res.json(cart);
    }
    static async createCart(req, res) {
        const cartService = tsyringe_1.container.resolve(cartService_1.default);
        const cart = await cartService.createCart(req.body);
        res.status(201).json(cart);
    }
    static async updateCart(req, res) {
        const cartService = tsyringe_1.container.resolve(cartService_1.default);
        const id = parseInt(req.params.id);
        const cart = req.body;
        try {
            const [affectedCount] = await cartService.updateCart(id, cart);
            if (affectedCount === 0) {
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
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async deleteCart(req, res) {
        const cartService = tsyringe_1.container.resolve(cartService_1.default);
        const id = parseInt(req.params.id);
        try {
            const deletedCount = await cartService.deleteCart(id);
            if (deletedCount === 0) {
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
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
}
exports.default = CartController;
