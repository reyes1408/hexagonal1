"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBvendedorRepository = void 0;
const vendedor_1 = require("../dominio/vendedor");
const vendedor_model_1 = __importDefault(require("./model/vendedor.model"));
//En las dependencias se define los metodos que modelamos en vendedorRepository
class DBvendedorRepository {
    createVendedor(id, name, lastName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vendedorNuevo = yield vendedor_model_1.default.create({ id, name, lastName, password });
                return new vendedor_1.Vendedor(vendedorNuevo.id, vendedorNuevo.name, vendedorNuevo.lastName, vendedorNuevo.password);
            }
            catch (error) {
                console.log("Error en archivo (dependecies), createVendedor", error);
                return null;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vendedoresFound = yield vendedor_model_1.default.findAll();
                return vendedoresFound;
            }
            catch (error) {
                console.log("Error en dependecies, getAll", error);
                return null;
            }
        });
    }
    deleteVendedor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vendedordeleted = yield vendedor_model_1.default.destroy({
                    where: {
                        id: id,
                    }
                });
                return vendedordeleted > 0;
            }
            catch (error) {
                console.log("Error en dependencias, deleteVendedor", error);
                return false;
            }
        });
    }
}
exports.DBvendedorRepository = DBvendedorRepository;
