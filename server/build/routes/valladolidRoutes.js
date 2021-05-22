"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const valladolidController_1 = __importDefault(require("../controllers/valladolidController"));
class ValladolidRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //ruta para consultar todos los items
        this.router.get('/', valladolidController_1.default.list);
        //ruta para consultar todos los items
        this.router.get('/:id', valladolidController_1.default.getOne);
        //ruta para crear
        this.router.post('/', valladolidController_1.default.create);
        //ruta para eliminar
        this.router.delete('/:id', valladolidController_1.default.delete);
        //ruta para editar
        this.router.put('/:id', valladolidController_1.default.update);
    }
}
const valladolidRoutes = new ValladolidRoutes();
exports.default = valladolidRoutes.router;
