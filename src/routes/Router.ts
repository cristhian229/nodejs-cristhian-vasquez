import { Router } from "express";

import { productRouter } from "./index";
import { userRouter } from "./userRoutes";
import { orderRouter } from "./orderRoutes";
import { cartRouter } from "./cartRoutes";

const router: Router = Router();

router.use("/products", productRouter)
router.use("/users", userRouter)
router.use("/orders", orderRouter)
router.use("/carts", cartRouter)

export default router;