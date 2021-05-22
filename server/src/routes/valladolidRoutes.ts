import {Router} from 'express';
import valladolidController from '../controllers/valladolidController';
class ValladolidRoutes{
    public router:Router=Router();
    constructor(){
        this.config();
    }
    config():void{


        //ruta para consultar todos los items
       this.router.get('/',valladolidController.list) ;

        //ruta para consultar todos los items
       this.router.get('/:id',valladolidController.getOne) ;
       
       //ruta para crear
       this.router.post('/',valladolidController.create);

       //ruta para eliminar
       this.router.delete('/clientes/list/:id',valladolidController.delete);
      

        //ruta para editar
        this.router.put('/:id',valladolidController.update);

        //ruta para consultar todos los clientes activos
        this.router.get('/clientes/list',valladolidController.listclient) ;

    }
}
const valladolidRoutes = new ValladolidRoutes();
export default valladolidRoutes.router;