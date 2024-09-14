import { axiosInstance } from "./axiosInstance";

export const postCadastroUsuario = async (data) => {
    const response = await axiosInstance.post("/cadastro", data);
    return response.data;
}