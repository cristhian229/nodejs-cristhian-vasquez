"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const userModel_1 = __importDefault(require("../models/userModel"));
const productModel_1 = __importDefault(require("../models/productModel"));
const orderModel_1 = __importDefault(require("../models/orderModel"));
const cartModel_1 = __importDefault(require("../models/cartModel"));
const prodCarModel_1 = __importDefault(require("../models/prodCarModel"));
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'Rlwl2023.',
    database: 'filtro',
    models: [userModel_1.default, productModel_1.default, orderModel_1.default, cartModel_1.default, prodCarModel_1.default], // Añade todos tus modelos aquí
});
exports.default = sequelize;
