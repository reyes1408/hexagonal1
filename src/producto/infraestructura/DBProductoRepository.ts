import { Producto } from "../dominio/producto";
import { ProductoRepository } from "../dominio/productoRepository";
import ModelProducto from "./model/producto.model";

//En las dependencias se definen los métodos que modelamos en el productoRepository
export class DBProductoRepository implements ProductoRepository{
    async createProducto(id: number, nombre: string, cantidad: number, precio: number): Promise<Producto | null> {
        try {
            const productoNuevo = await ModelProducto.create({ id, nombre, cantidad, precio });
            return new Producto(productoNuevo.id, productoNuevo.nombre, productoNuevo.cantidad, productoNuevo.precio);
        } catch (error) {
            console.log("Error en infraestructura (DBProductoRepository), createProducto"), error;
               return null;         
        }
    }

    async getAll(): Promise<Producto[] | null> {
        try {
            const productsFound = await ModelProducto.findAll();
            return productsFound;
        } catch (error) {
            console.log("Error en infraestructura (DBProductoRepository), getAll"),  error;
            return null;
        }
    }
}

