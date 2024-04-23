import { Request, Response } from "express";
import { CreateProductoUseCase } from "../../aplicacion/createProductoUseCase";

export class CreateProductoController { //Aquí se define el comportamiento que tendrá la clase
    constructor (readonly createProductoUseCase: CreateProductoUseCase) {}

    async run (req: Request, res: Response) {
        const data = req.body;

        try {
            
            const producto = await this.createProductoUseCase.run(
                data.id,
                data.nombre,
                data.precio,
                data.cantidad
            )

            if (producto) {
                res.status(201).send({
                    status: "succes",
                    data: {
                        nombre: producto?.nombre,
                        precio: producto?.precio,
                        cantidad: producto?.cantidad
                    }
                });
            } else {
                res.status(204).send({
                    status:"error",
                    data: "No se pudo crear el registro"
                })
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                mssg: "Ocurrio un error al intentar crear el producto",
                error: error
            })
            
        }
    }

}


