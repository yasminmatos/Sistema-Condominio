import { db } from "../bancoDados.js";

//função que pode ter uma requisição e uma resposta
//no caso da rota, não é necessário uma req
export const getUser = (_,resposta) => {
    const user = "SELECT * FROM usuario";

    db.query(user, (erro, dado) => {
        if (erro) return resposta.json(erro);

        return resposta.status(200).json(dado);
    });

};