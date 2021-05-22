import {Request,Response} from 'express';
class IndexController {
    index (req: Request,res: Response){
        //res.send('hello');
        res.json({Text: 'API Is /api/cajavalladolid'})
    }
        
        
}
export const indexController =new IndexController();
