"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVendedorController = exports.createVendedorUseCase = exports.encriptPassHelpers = exports.dbvendedorRepository = void 0;
const DBvendedorRepository_1 = require("./DBvendedorRepository");
const encriptPass_1 = require("../infraestructura/helpers/encriptPass");
const createVendedorUseCase_1 = require("../aplicacion/createVendedorUseCase");
const createVendedorController_1 = require("./controllers/createVendedorController");
exports.dbvendedorRepository = new DBvendedorRepository_1.DBvendedorRepository();
exports.encriptPassHelpers = new encriptPass_1.EncriptPassHelpers();
exports.createVendedorUseCase = new createVendedorUseCase_1.CreateVendedorUseCase(exports.dbvendedorRepository, exports.encriptPassHelpers);
exports.createVendedorController = new createVendedorController_1.CreateVendedorController(exports.createVendedorUseCase);
