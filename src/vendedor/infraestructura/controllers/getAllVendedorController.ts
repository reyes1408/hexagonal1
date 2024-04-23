import { Request, Response } from "express";
import { GetAllVendedorUseCase } from "../../aplicacion/getAllVendedorUseCase";

export class getAllVendedorController {
    constructor(readonly GetAllVendedorUseCase: GetAllVendedorUseCase) {}

    async run (req: Request, res: Response) {
        //const data = req.body

        try {
            
            const allVendedor = await this.GetAllVendedorUseCase.run()

            if (allVendedor) 
                res.status(201).send({
                    status: "sucess", 
                    data: {
                        allVendedor
                    }
                });
            else
                res.status(204).send({
                    status: "error",
                    data: "No hay vendedores registrados (getAllVendedorController)"
                })

        } catch (error) {
            console.log("error en el archivo getAllVendedoreController", error);
            
        }

    }
}
