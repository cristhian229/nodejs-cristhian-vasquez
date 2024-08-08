import { Router } from "express";
import ProductController from "../controllers/productController";

export const productRouter = Router();

productRouter.get("/", ProductController.getAllProducts);
productRouter.get("/:id", ProductController.getProductById);
productRouter.post("/", ProductController.createProduct);
productRouter.put("/:id", ProductController.updateProduct);
productRouter.delete("/:id", ProductController.deleteProduct);

// enrutar por donde va la peticion 

// middleware capa de autentificacion

// capa controller, recibe las peticiones responde y envia a la capa de service

// capa de service interactua con la capa de datos, hacer las operaciones que tienen que hacer

// capa de modelos es la capa que interactua con la orm utiliza la base de datos