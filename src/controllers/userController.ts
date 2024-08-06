import { container } from "tsyringe";
import { Request, Response } from "express";
import UserService from "../services/userService";



export default class UserController {
    static async getAllUsers(req: Request, res: Response) {
        const userService = container.resolve(UserService);
        const users = await userService.getAllUsers();
        res.json(users);
    }

    static async getUserById(req: Request, res: Response) {
        const userService = container.resolve(UserService);
        const user = await userService.getUserById(parseInt(req.params.id));
        res.json(user);
    }


    static async createUser(req: Request, res: Response) {
        const userService = container.resolve(UserService);
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    }

    static async updateUser(req: Request, res: Response){
        const userService = container.resolve(UserService);
        const id = parseInt(req.params.id);
        const user = req.body;
        try{
            const [affectedCount] = await userService.updateUser(id, user);
            if(affectedCount === 0){
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

        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }
    }

    static async deleteUser(req: Request, res: Response){
        const userService = container.resolve(UserService);
        const id = parseInt(req.params.id);
        try{
            const deletedCount = await userService.deleteUser(id);
            if(deletedCount === 0){
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

        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }
    }
}