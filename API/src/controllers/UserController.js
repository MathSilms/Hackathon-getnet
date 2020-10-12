import User from '../models/User'
import bcrypt from 'bcryptjs';
class UserController {

        async store(req, res) {
            const { name,email,cpf, password } = req.body;



            // Verificando Email e CPF

            const UserMail = await User.findOne({ where:{ email }});
            const UserCpf = await User.findOne({ where:{ cpf }});
            if( UserMail || UserCpf ) {
                return res.status(401).json({ message:'Dados já cadastrados no sistema'})
            }

            const password_hash =  await bcrypt.hash(password, 10)
            await User.create({
                    name,
                    email,
                    cpf,
                    password_hash,
            })

            return res.status(201).json({message:'Cadastro Efetuado com sucesso!'})

        }

        async update(req,res){
            const { email, oldPassword } = req.body;
            const user = await User.findByPk(req.userId);

            if (email !== user.email) {
                const userExists = await User.findOne({ where: { email } });
                if (userExists) {
                    return res.status(400).json({ error: 'User already exists.' });
                }
            }

            if(oldPassword && !(await User.checkPassword(oldPassword))){
                return res.status(401).json({ error:'Senhas não batem'});
            }

            const {id, name ,provider } = await user.update(req.body);


            return res.json({
                id,
                name,
                provider,
                email
            })
        }
        async show(req,res){
            const users = await User.findAll();
            return res.status(200).json({users});
        }

}

export default new UserController() ;
