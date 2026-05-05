const BASE_URL = "http://localhost:8080";

export async function criarUsuario(dados) {
    const response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    });

    if (!response.ok) throw new Error("Erro ao criar usuário");
    return response.json();
}

export async function buscarUsuarios() {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error("Erro ao buscar usuários");
    return response.json();
}

export async function buscarUsuarioPorId(id) {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    if (!response.ok) throw new Error("Usuário não encontrado");
    return response.json();
}

export async function atualizarUsuario(id, dados) {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    });
    if (!response.ok) throw new Error("Erro ao atualizar usuário");
    return response.json();
}

export async function deletarUsuario(id) {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) throw new Error("Erro ao deletar usuário");
}

export async function login(dados) {
    const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    });

    if (!response.ok) throw new Error("E-mail ou senha inválidos");
    return response.json();
}