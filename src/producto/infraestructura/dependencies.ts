import { DBProductoRepository } from "./DBProductoRepository";

import { CreateProductoUseCase } from "../aplicacion/createProductoUseCase";
import { CreateProductoController } from "./controllers/createProductoController";

export const dbproductoRepository = new DBProductoRepository();
export const createProductoUseCase = new CreateProductoUseCase(dbproductoRepository);
export const createProductoController = new CreateProductoController(createProductoUseCase);
