import { Sequelize } from 'sequelize-typescript';
import UserModel from '../models/userModel';
import ProductModel from '../models/productModel';
import OrderModule from '../models/orderModel';
import CartModel from '../models/cartModel';
import ProdCarModel from '../models/prodCarModel';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'Rlwl2023.',
    database: 'filtro',
    models: [UserModel, ProductModel, OrderModule, CartModel, ProdCarModel], // Añade todos tus modelos aquí
});

export default sequelize;
