import {Router} from 'express';
class ValladolidRoutes{
    public router:Router=Router();
    constructor(){
        this.config();
    }
    config():void{
       this.router.get('/',(req,res)=>res.send('clientes')) ;
    }
}
const valladolidRoutes = new ValladolidRoutes();
export default valladolidRoutes.router;