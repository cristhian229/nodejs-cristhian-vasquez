import { container } from "tsyringe";
import UserRepository from "../repositories/userRepository";
import UserService from "../services/userService";
import ProductRepository from "../repositories/productRepository";
import ProductService from "../services/productService";
import OrderRepository from "../repositories/orderRepository";
import OrderService from "../services/orderService";
import CartRepository from "../repositories/cartRepository";
import CartService from "../services/cartService";

container.registerSingleton<UserRepository>("UserRepository", UserRepository);
container.registerSingleton<UserService>("UserService", UserService);

container.registerSingleton<ProductRepository>("ProductRepository", ProductRepository);
container.registerSingleton<ProductService>("ProductService", ProductService);

container.registerSingleton<OrderRepository>("OrderRepository", OrderRepository);
container.registerSingleton<OrderService>("OrderService", OrderService);

container.registerSingleton<CartRepository>("CartRepository", CartRepository);
container.registerSingleton<CartService>("CartService", CartService);
