"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        //res.send('hello');
        res.json({ Text: 'API Is /api/cajavalladolid' });
    }
}
exports.indexController = new IndexController();
