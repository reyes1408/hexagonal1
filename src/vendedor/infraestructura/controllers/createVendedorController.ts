import { Request, Response } from "express";
import { CreateVendedorUseCase } from "../../aplicacion/createVendedorUseCase";

export class CreateVendedorController { // Aquí se define el comportamiento que tendrá la clase.
    constructor( readonly createVendedorUseCase: CreateVendedorUseCase) {}

    async run(req: Request, res: Response) {
        const data = req.body

        try {
            
            const vendedor = await this.createVendedorUseCase.run(
                data.id,
                data.name,
                data.lastName,
                data.password
            );

            if (vendedor) {
                res.status(201).send({
                    status: "sucess",
                    data: {
                        // id: vendedor?.id,
                        name: vendedor?.name,
                        lastName: vendedor?.lastName,
                        password: vendedor?.password
                    }
                });
            } else {
                res.status(204).send({
                    status: "error",
                    data: "No se pudo crear el registro."
                });
            }

        } catch (error) {
            
            res.status(204).send({
                status: "error",
                data: "Ocurrio un error",
                mssg: error
            })
        }
    }
}
