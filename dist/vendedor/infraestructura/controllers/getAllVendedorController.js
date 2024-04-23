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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllVendedorController = void 0;
class getAllVendedorController {
    constructor(GetAllVendedorUseCase) {
        this.GetAllVendedorUseCase = GetAllVendedorUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const data = req.body
            try {
                const allVendedor = yield this.GetAllVendedorUseCase.run();
                if (allVendedor)
                    res.status(201).send({
                        status: "sucess",
                        data: {
                            allVendedor
                        }
                    });
                else
                    res.status(204).send({
                        status: "error",
                        data: "No hay vendedores registrados (getAllVendedorController)"
                    });
            }
            catch (error) {
                console.log("error en el archivo getAllVendedoreController", error);
            }
        });
    }
}
exports.getAllVendedorController = getAllVendedorController;
