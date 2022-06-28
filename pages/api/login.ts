import { NextApiRequest, NextApiResponse } from "next";
import { DefaultMsgResponse } from '../../types/DefaultMsgResponse';

export default (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse>) => {

    if (req.method?.toLocaleLowerCase() === 'post') {

        const { login, password } = req.body;
        if (login === "danilo" && password === '123') {
            return res.status(200).json({ msg: 'login autenticado!' })
        }

        return res.status(400).json({ msg: 'Usuário ou senha estão incorretas.' })
    }
    return res.status(405).json({ error: "Método informado não é permitido" })
}