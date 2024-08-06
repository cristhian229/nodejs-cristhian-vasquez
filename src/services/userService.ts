import { CreationAttributes } from 'sequelize';
import { injectable, inject } from 'tsyringe';
import UserRepository from '../repositories/userRepository';
import UserModel from '../models/userModel';

@injectable()
export default class UserService {
    constructor(
        @inject(UserRepository) private userRepository: UserRepository
    ) {}

    async getAllUsers() {
        return await this.userRepository.findAll();
    }

    async getUserById(id: number) {
        return await this.userRepository.findById(id);
    }

    async createUser(user: CreationAttributes<UserModel>) {
        return await this.userRepository.create(user);
    }

    async updateUser(id: number, user: any): Promise<any> {
        return await this.userRepository.update(id, user);
    }

    async deleteUser(id: number): Promise<any> {
        return await this.userRepository.delete(id);
    }
}