"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const userService_1 = __importDefault(require("../services/userService"));
class UserController {
    static async getAllUsers(req, res) {
        const userService = tsyringe_1.container.resolve(userService_1.default);
        const users = await userService.getAllUsers();
        res.json(users);
    }
    static async getUserById(req, res) {
        const userService = tsyringe_1.container.resolve(userService_1.default);
        const user = await userService.getUserById(parseInt(req.params.id));
        res.json(user);
    }
    static async createUser(req, res) {
        const userService = tsyringe_1.container.resolve(userService_1.default);
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    }
    static async updateUser(req, res) {
        const userService = tsyringe_1.container.resolve(userService_1.default);
        const id = parseInt(req.params.id);
        const user = req.body;
        try {
            const [affectedCount] = await userService.updateUser(id, user);
            if (affectedCount === 0) {
                res.status(404).json({
                    status: 404,
                    message: 'user not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'user updated'
            });
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async deleteUser(req, res) {
        const userService = tsyringe_1.container.resolve(userService_1.default);
        const id = parseInt(req.params.id);
        try {
            const deletedCount = await userService.deleteUser(id);
            if (deletedCount === 0) {
                res.status(404).json({
                    status: 404,
                    message: 'user not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'user deleted'
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
exports.default = UserController;
