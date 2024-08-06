import { injectable } from "tsyringe";
import ProductModel from "../models/productModel";
import { Products } from "../interfaces/products";

@injectable()
export default class ProductRepository {
    async findAll(): Promise<Products[]>{
        return await ProductModel.findAll();
    }

    async findById(id: number): Promise<Products | null>{
        return await ProductModel.findByPk(id);
    }

    async create(product: Partial<Products>): Promise<Products>{
       return await ProductModel.create(product as ProductModel);
    }

    async update(id: number, product: Partial<Products>): Promise<[number]>{
        return await ProductModel.update(product, {where: {id}});
    }

    async delete(id: number): Promise<number>{
        return await ProductModel.destroy({where: {id}});
    }


}