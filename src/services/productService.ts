import ProductRepository from '../repositories/productRepository';
import { CreationAttributes } from 'sequelize';
import { injectable, inject } from 'tsyringe';
import ProductModel from '../models/productModel';


@injectable()
export default class ProductService {
    constructor(
        @inject(ProductRepository) private productRepository: ProductRepository
    ) {}

    async getAllProducts() {
        return await this.productRepository.findAll();
    }

    async getProductById(id: number) {
        return await this.productRepository.findById(id);
    }

    async createProduct(product: CreationAttributes<ProductModel>) {
        return await this.productRepository.create(product);
    }

    async updateProduct(id: number, product: any): Promise<any> {
        return await this.productRepository.update(id, product);
    }

    async deleteProduct(id: number): Promise<any> {
        return await this.productRepository.delete(id);
    }
}