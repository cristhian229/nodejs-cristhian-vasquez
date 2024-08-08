import { Router } from "express";

import { productRouter } from "./index";
import { userRouter } from "./userRoutes";
import { orderRouter } from "./orderRoutes";
import { cartRouter } from "./cartRoutes";
import authJWT from "../middlewares/authJWT";

const router: Router = Router();

router.use("/products",authJWT, productRouter)
router.use("/users", userRouter)
router.use("/orders",authJWT, orderRouter)
router.use("/carts", authJWT, cartRouter)

export default router;