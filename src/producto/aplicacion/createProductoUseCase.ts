import { Producto } from "../dominio/producto";
import { ProductoRepository } from "../dominio/productoRepository";

export class CreateProductoUseCase {

    constructor (readonly productoRepository: ProductoRepository){}

    async run (
        id: number,
        nombre: string,
        precio: number,
        cantidad: number
    ): Promise <Producto | null> {
        try{
            const productoCreado = await this.productoRepository.createProducto(
                id,
                nombre,
                cantidad,
                precio
            )

            return productoCreado
        } catch (error) {
            console.log('Error en el archivo (createProductoUseCase)', error);
            return null;
        }
    }

}
