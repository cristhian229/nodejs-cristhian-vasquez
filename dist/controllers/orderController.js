"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const orderService_1 = __importDefault(require("../services/orderService"));
class OrderController {
    static async getAllOrders(req, res) {
        const orderService = tsyringe_1.container.resolve(orderService_1.default);
        const orders = await orderService.getAllOrders();
        res.json(orders);
    }
    static async getOrdersById(req, res) {
        const orderService = tsyringe_1.container.resolve(orderService_1.default);
        const order = await orderService.getOrderById(parseInt(req.params.id));
        res.json(order);
    }
    static async getOrdersByUserId(req, res) {
        const orderService = tsyringe_1.container.resolve(orderService_1.default);
        const orders = await orderService.getOrderByUserId(parseInt(req.params.userId));
        res.json(orders);
    }
    static async createOrder(req, res) {
        const orderService = tsyringe_1.container.resolve(orderService_1.default);
        const order = await orderService.createOrder(req.body);
        res.status(201).json(order);
    }
    static async updateOrder(req, res) {
        const orderService = tsyringe_1.container.resolve(orderService_1.default);
        const id = parseInt(req.params.id);
        const order = req.body;
        try {
            const [affectedCount] = await orderService.updateOrder(id, order);
            if (affectedCount === 0) {
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
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async deleteOrder(req, res) {
        const orderService = tsyringe_1.container.resolve(orderService_1.default);
        const id = parseInt(req.params.id);
        try {
            const deletedCount = await orderService.deleteOrder(id);
            if (deletedCount === 0) {
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
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
}
exports.default = OrderController;
