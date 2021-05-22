import {request, Request,Response} from 'express';
import pool from '../database';
class ValladolidController {

    //metodo para consultar o listar el detalle de cuenta cliente
    public async list (req: Request,res: Response){
      const cliente = await pool.query('SELECT * FROM tbl_cmv_cliente_cuenta');
      res.json(cliente);
        //res.json({Text: 'listando un cliente'})
    }

    //metodo para consultar solo un dato   de la tabla cuenta cliente  
    public async getOne (req: Request,res: Response){
        const {id}=req.params;
        const cliente=await pool.query('SELECT * FROM tbl_cmv_cliente_cuenta WHERE idClienteCuenta= ?',[id]);
        console.log(cliente);        
        res.json({Text: 'este es el cliente '+ req.params.id})
    }

    //metodo para crear un cliente
    public async create(req: Request,res: Response){
        await pool.query('INSERT INTO tbl_cmv_cliente SET ?',[req.body]);
        res.json({Text: 'creando un cliente'})
    }
    
    //metodo para borrar un cliente
    public async delete(req: Request,res: Response):Promise<void>{
        const {id}=req.params;
        
        await pool.query ('DELETE FROM tbl_cmv_cliente WHERE idCliente= ?',[id]);
        //await pool.query ('DELETE FROM tbl_cmv_cliente_cuenta WHERE idClienteCuenta= ?',[id]);
        res.json({message: 'eliminado el cliente '+ req.params.id} );
    }
    //metodo para borrar una cliente
    public async update(req: Request,res: Response){
        const {id}=req.params;
        await pool.query ('UPDATE tbl_cmv_cliente_cuenta set ? WHERE idClienteCuenta= ?',[req.body,id]);
        res.json({Text: 'actualizando el cliente '+ req.params.id})
    }

    //listado de clientes
    public async listclient (req: Request,res: Response){
        const client = await pool.query('SELECT * FROM tbl_cmv_cliente');
        res.json(client);
          //res.json({Text: 'listando un cliente'})
      }
}


const valladolidController=new ValladolidController();
export default valladolidController;

