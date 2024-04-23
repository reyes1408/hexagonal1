import { Router } from "express";
import { createVendedorController } from "./dependencies"; 

export const vendedorRouter = Router();

vendedorRouter.post('/', (req, res) => {

    createVendedorController.run(req, res)
    .then(() => {
        return null
    }).catch(error => {
        console.error("Error al crear un vendedor (vendedorRoutes)", error)
    })
})
