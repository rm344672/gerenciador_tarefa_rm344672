import type {NextApiRequest, NextApiResponse, NextApiHandler} from 'next';
import { DefaultMsgResponse } from '../types/DefaultMsgResponse';
import mongoose from 'mongoose';

export const connect = (handler: NextApiHandler) => 
    async(req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse>) => {
        console.log('MongoDB status', mongoose.connections[0].readyState);
        if(mongoose.connections[0].readyState){
            return handler(req, res);
        }

        const DB_CONNECTIONSTRING = "mongodb://localhost:27017/87aoj-gerenciador-tarefas";

        mongoose.connection.on('connected', () => console.log("Conectado ao banco de dados."));
        mongoose.connection.on('error', err => console.log("Erro ao conectar no banco de dados.", err));

        await mongoose.connect(DB_CONNECTIONSTRING);

        return handler(req, res);
    }