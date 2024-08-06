import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import sequelize from './config/db';
import router from "./routes/Router";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

app.use("/api", router);


const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected!");
    await sequelize.sync();
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();

