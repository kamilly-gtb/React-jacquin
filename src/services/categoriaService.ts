import type { Categoria } from "../types/categoria";
import { api } from "./api";

const categoriaService ={
    async listar(){
        const resposta = await api.get<Categoria[]>('categoria');
        return resposta.data;
    }
}
export default categoriaService;