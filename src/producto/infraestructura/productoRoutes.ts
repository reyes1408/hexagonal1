import { Router } from "express";
import { createProductoController } from "./dependencies";

export const productoRouter = Router();

productoRouter.post("/", (req, res) => {
    
    createProductoController.run(req, res)
    .then(() => {
      return null;
    })
    .catch((error) => {
      console.error("Error al crear un producto (productoRoutes)", error);
    });
});
