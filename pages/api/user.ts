import type {NextApiResponse, NextApiRequest} from 'next';
import { DefaultMsgResponse } from '../../types/DefaultMsgResponse';
import {UserModel} from '../../models/UserModel';
import {connect} from '../../middlewares/connectToMongoDB';

const registerEndpoint = async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse>) => {
    try{
        if(req.method?.toLocaleLowerCase() === 'post'){
            const{nome, email, password} = req.body;

            console.log(nome.trim < 2)

            if(!nome || nome.trim().length < 2){
                return res.status(400).json({error: "Nome não é válido."})        
            }

            if(!email || email.trim().length < 5 || !email.includes('@') || !email.includes('.')){
                return res.status(400).json({error: "Email não é válido."})        
            }

            if(!password || password.trim().length < 6){
                return res.status(400).json({error: "Senha deve ter pelo menos 6 caracteres."})        
            }

            const user = {
                nome,
                email,
                password
            };

            await UserModel.create(user);
            return res.status(200).json({msg: "Usuário cadastrado com sucesso!"})
        }
        return res.status(405).json({error: "Método informado não existe"})
    }catch(e){
        console.log('Error on create user: ', e);
        return res.status(500).json({error: 'Houve um erro inesperado!'})
    }
}

export default connect(registerEndpoint);