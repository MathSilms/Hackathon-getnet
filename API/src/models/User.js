import { Model, Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs'

class User extends Model{
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                cpf: Sequelize.STRING,
                password_hash: Sequelize.STRING,
                permission:Sequelize.BOOLEAN
            },
            {
                sequelize,
            },
        );

    }

    checkPassword(password) {
       return bcrypt.compare(password,this.password_hash);
    }
}

export default User;
