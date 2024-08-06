"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const Router_1 = __importDefault(require("./routes/Router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", Router_1.default);
const startServer = async () => {
    try {
        await db_1.default.authenticate();
        console.log("Database connected!");
        await db_1.default.sync();
        app.listen(3000, () => {
            console.log("Server started on port 3000");
        });
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
startServer();
