"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ValladolidRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('clientes'));
    }
}
const valladolidRoutes = new ValladolidRoutes();
exports.default = valladolidRoutes.router;
