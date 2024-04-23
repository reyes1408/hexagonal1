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
exports.CreateVendedorController = void 0;
class CreateVendedorController {
    constructor(createVendedorUseCase) {
        this.createVendedorUseCase = createVendedorUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const vendedor = yield this.createVendedorUseCase.run(data.id, data.name, data.lastName, data.password);
                if (vendedor) {
                    res.status(201).send({
                        status: "sucess",
                        data: {
                            // id: vendedor?.id,
                            name: vendedor === null || vendedor === void 0 ? void 0 : vendedor.name,
                            lastName: vendedor === null || vendedor === void 0 ? void 0 : vendedor.lastName,
                            password: vendedor === null || vendedor === void 0 ? void 0 : vendedor.password
                        }
                    });
                }
                else {
                    res.status(204).send({
                        status: "error",
                        data: "No se pudo crear el registro."
                    });
                }
            }
            catch (error) {
                res.status(204).send({
                    status: "error",
                    data: "Ocurrio un error",
                    mssg: error
                });
            }
        });
    }
}
exports.CreateVendedorController = CreateVendedorController;
