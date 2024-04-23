import { Producto } from "./producto";

export interface ProductoRepository {

    getAll(): Promise <Producto [] | null>

    createProducto(
        id: number,
        nombre: string,
        cantidad: number,
        precio: number,
    ): Promise <Producto | null>

}
