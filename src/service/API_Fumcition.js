import { axiosInstance } from "./axiosInstance";

export const postCadastroUsuario = async (data) => {
    const response = await axiosInstance.post("/cadastro", data);
    return response.data;
}

export const postCadastroADM = async (data) => {
    const response = await axiosInstance.post("/cadastro_adm", data);
    return response.data;
}

export const postVerificarEmail = async (data) => {
    const response = await axiosInstance.post("/redefinir_senha", data);
    return response.data;
}

export const postLogin = async (data) => {
    const response = await axiosInstance.post("/login", data);
    return response.data;
}

export const postMudarSenha = async (data, id) => {
    const response = await axiosInstance.post("/resetar_senha/" + id, data);
    return response.data;
}

export const postProcurarPerfil = async (data) => {
    const response = await axiosInstance.post("/busca", data);
    return response.data;
}

export const postEditarPerfil = async (data) => {
    const response = await axiosInstance.post("/editar_perfil", data);
    return response.data;
}

export const postCriarAtividade = async (data) => {
    const response = await axiosInstance.post("/criar_atividades", data);
    return response.data;
}

export const postProcurarAtividade = async (data) => {
    const response = await axiosInstance.post("/listar_atividades_do_usuario", data);
    return response.data;
}

export const postDoacao = async (data) => {
    const response = await axiosInstance.post("/doacao", data);
    return response.data;
}