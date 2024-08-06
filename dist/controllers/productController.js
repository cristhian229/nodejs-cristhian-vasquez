"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productService_1 = __importDefault(require("../services/productService"));
class ProductController {
    static async getAllProducts(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        const products = await productService.getAllProducts();
        res.json(products);
    }
    static async getProductById(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        const product = await productService.getProductById(parseInt(req.params.id));
        res.json(product);
    }
    static async createProduct(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    }
    static async updateProduct(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        const id = parseInt(req.params.id);
        const product = req.body;
        try {
            const [affectedCount] = await productService.updateProduct(id, product);
            if (affectedCount === 0) {
                res.status(404).json({
                    status: 404,
                    message: 'Product not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'Product updated'
            });
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async deleteProduct(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        const id = parseInt(req.params.id);
        try {
            const deletedCount = await productService.deleteProduct(id);
            if (deletedCount === 0) {
                res.status(404).json({
                    status: 404,
                    message: 'Product not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'Product deleted'
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
exports.default = ProductController;
