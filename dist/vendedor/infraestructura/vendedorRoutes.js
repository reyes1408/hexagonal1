"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendedorRouter = void 0;
const express_1 = require("express");
const dependencies_1 = require("./dependencies");
exports.vendedorRouter = (0, express_1.Router)();
exports.vendedorRouter.post('/crear', (req, res) => {
    dependencies_1.createVendedorController.run(req, res)
        .then(() => {
        return null;
    }).catch(error => {
        console.error("Error al crear un vendedor (vendedorRoutes)", error);
    });
});
