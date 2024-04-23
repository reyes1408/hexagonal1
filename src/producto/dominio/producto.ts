export class Producto {
    constructor(
        readonly id: number,
        readonly nombre: string,
        readonly cantidad: number,
        readonly precio: number,
    ) {}
}