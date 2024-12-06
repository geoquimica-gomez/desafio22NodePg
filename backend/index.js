import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import postRoutes from "./routes/post.routes.js";

// Configuración global
dotenv.config();

// Instanciación de la app y middlewares
const app = express();
app.use(cors());
app.use(express.json());
app.use("/posts", postRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
