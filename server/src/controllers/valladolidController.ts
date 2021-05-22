import {request, Request,Response} from 'express';
import pool from '../database';
class ValladolidController {

    //metodo para consultar o listar
    public async list (req: Request,res: Response){
      const cliente = await pool.query('SELECT * FROM tbl_cmv_cliente_cuenta');
      res.json(cliente);
        //res.json({Text: 'listando un cliente'})
    }

    //metodo para consultar solo un dato    
    public async getOne (req: Request,res: Response){
        const {id}=req.params;
        const cliente=await pool.query('SELECT * FROM tbl_cmv_cliente_cuenta WHERE idClienteCuenta= ?',[id]);
        console.log(cliente);        
        res.json({Text: 'este es el cliente '+ req.params.id})
    }

    //metodo para crear un cliente
    public async create(req: Request,res: Response){
        await pool.query('insertando cliente ',[req.body]);
        res.json({Text: 'creando un cliente'})
    }
    
    //metodo para borrar un cliente
    public async delete(req: Request,res: Response){
        const {id}=req.params;
        await pool.query ('DELETE FROM tbl_cmv_cliente_cuenta WHERE idClienteCuenta= ?',[id]);
        res.json({Text: 'eliminado el cliente '+ req.params.id} );
    }
    //metodo para borrar un cliente
    public async update(req: Request,res: Response){
        const {id}=req.params;
        await pool.query ('UPDATE tbl_cmv_cliente_cuenta set ? WHERE idClienteCuenta= ?',[req.body,id]);
        res.json({Text: 'actualizando el cliente '+ req.params.id})
    }
}


const valladolidController=new ValladolidController();
export default valladolidController;

