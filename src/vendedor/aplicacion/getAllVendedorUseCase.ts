import { Vendedor } from "../dominio/vendedor";
import { VendedorRepository } from "../dominio/vendedorRepository";

export class GetAllVendedorUseCase {
    constructor(readonly vendedorRepository: VendedorRepository){}

    async run(): Promise <Vendedor[] | null> {
        try {
            const allVendedores =  await this.vendedorRepository.getAll()
            return allVendedores;

        } catch (error) {
            console.log("Error en el archivo getAllVendedoruseCase", error);
            return null;
        }
    }
}
