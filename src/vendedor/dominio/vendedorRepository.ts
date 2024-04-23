import { Vendedor } from "./vendedor";

export interface VendedorRepository {

    // getById(id: number): Promise <Vendedor | null>

    getAll(): Promise <Vendedor [] | null>;

    createVendedor(
        id: number,
        name: string, 
        lastName: string,
        password: string
    ): Promise <Vendedor | null>

    deleteVendedor(id: number): Promise <boolean>

}
