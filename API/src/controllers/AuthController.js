import MeuScore from ''

class ScoreController extends Model{

    async store(req,res){
        const user = await User.findByPk(req.userId);
        


    }
}
