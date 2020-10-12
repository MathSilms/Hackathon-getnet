import User from '../models/User';
import jwt from 'jsonwebtoken';
import AuthConfig from '../config/auth'
class SessionController {
    async store(req,res){
        const {email, password } = req.body;

        // Verificando usuário
        const user = await User.findOne({where:{email}})
        if(!user ){
            return res.status(401).json({error:"User not found"});
        }

        // Verificando senha, checkPassword é um método dentro do model
        if(!(await user.checkPassword(password))){
            return res.status(401).json({error:'Senha inválida'})
        }

        const {id, name} = user;

        return res.json({
            user:{
                id,
                name,
                email
            },
            token: jwt.sign({id},AuthConfig.secret,{
                expiresIn:AuthConfig.expiresIn,
            })
        })


    }
}

export default new SessionController();
