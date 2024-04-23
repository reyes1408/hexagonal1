import { DBvendedorRepository } from "./DBvendedorRepository";
import { EncriptPassHelpers } from '../infraestructura/helpers/encriptPass'
import { Notification } from "./helpers/notification";

import { CreateVendedorUseCase } from "../aplicacion/createVendedorUseCase";
import { CreateVendedorController } from "./controllers/createVendedorController";

export const dbvendedorRepository = new DBvendedorRepository();
export const encriptPassHelpers = new EncriptPassHelpers();
export const notification = new Notification();
notification.conn();
export const createVendedorUseCase = new CreateVendedorUseCase(dbvendedorRepository, encriptPassHelpers, notification);
export const createVendedorController = new CreateVendedorController(createVendedorUseCase);
