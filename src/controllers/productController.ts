import { container } from "tsyringe";
import { Request, Response } from "express";
import ProductService from "../services/productService";
import { Products } from "../interfaces/products";

export default class ProductController {
    static async getAllProducts(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const products = await productService.getAllProducts();
        res.json(products);
    }

    static async getProductById(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const product = await productService.getProductById(parseInt(req.params.id));
        res.json(product);
    }


    static async createProduct(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    }

    static async updateProduct(req: Request, res: Response){
        const productService: ProductService = container.resolve(ProductService);
        const id = parseInt(req.params.id);
        const product = req.body;
        try{
            const [affectedCount] = await productService.updateProduct(id, product);
            if(affectedCount === 0){
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

        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }
    }

    static async deleteProduct(req: Request, res: Response){
        const productService = container.resolve(ProductService);
        const id = parseInt(req.params.id);
        try{
            const deletedCount = await productService.deleteProduct(id);
            if(deletedCount === 0){
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

        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }
    }
}









