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
const database_1 = __importDefault(require("../database"));
class ValladolidController {
    //metodo para consultar o listar
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliente = yield database_1.default.query('SELECT * FROM tbl_cmv_cliente_cuenta');
            res.json(cliente);
            //res.json({Text: 'listando un cliente'})
        });
    }
    //metodo para consultar solo un dato    
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cliente = yield database_1.default.query('SELECT * FROM tbl_cmv_cliente_cuenta WHERE idClienteCuenta= ?', [id]);
            console.log(cliente);
            res.json({ Text: 'este es el cliente ' + req.params.id });
        });
    }
    //metodo para crear un cliente
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insertando cliente ', [req.body]);
            res.json({ Text: 'creando un cliente' });
        });
    }
    //metodo para borrar un cliente
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tbl_cmv_cliente_cuenta WHERE idClienteCuenta= ?', [id]);
            res.json({ Text: 'eliminado el cliente ' + req.params.id });
        });
    }
    //metodo para borrar un cliente
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tbl_cmv_cliente_cuenta set ? WHERE idClienteCuenta= ?', [req.body, id]);
            res.json({ Text: 'actualizando el cliente ' + req.params.id });
        });
    }
}
const valladolidController = new ValladolidController();
exports.default = valladolidController;
