import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:8080";

async function buscarTodosUsuarios() {
  const response = await fetch(`${BASE_URL}/admin/users`);
  if (!response.ok) throw new Error("Erro ao buscar usuários");
  return response.json();
}

async function buscarPorEmail(email) {
  const response = await fetch(`${BASE_URL}/admin/users/search?email=${encodeURIComponent(email)}`);
  if (!response.ok) throw new Error("Usuário não encontrado");
  return response.json();
}

async function deletarUsuario(id) {
  const response = await fetch(`${BASE_URL}/admin/users/${id}`, {
    method: "DELETE"
  });
  if (!response.ok) throw new Error("Erro ao deletar usuário");
}

function Users() {
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([]);
  const [busca, setBusca] = useState("");
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    carregarTodos();
  }, []);

  async function carregarTodos() {
    setCarregando(true);
    setErro(null);
    try {
      const data = await buscarTodosUsuarios();
      setUsuarios(data);
    } catch (err) {
      setErro("Erro ao carregar usuários.");
    } finally {
      setCarregando(false);
    }
  }

  async function handleBusca(e) {
    const valor = e.target.value;
    setBusca(valor);

    if (valor.trim() === "") {
      carregarTodos();
      return;
    }

    try {
      setErro(null);
      const usuario = await buscarPorEmail(valor);
      setUsuarios([usuario]); // busca por email retorna um único usuário
    } catch (err) {
      setErro("Nenhum usuário encontrado com esse e-mail.");
      setUsuarios([]);
    }
  }

  async function handleDeletar(id) {
    if (!window.confirm("Deseja realmente deletar este usuário?")) return;
    try {
      await deletarUsuario(id);
      setUsuarios(prev => prev.filter(u => u.id !== id));
    } catch (err) {
      setErro("Erro ao deletar usuário.");
    }
  }

  return (
      <div className="admin-container">

        <div className="admin-left">
          <div>
            <h2>Hello, administrator!</h2>
            <p>User query screen.</p>
          </div>
          <button className="btn-exit" onClick={() => navigate("/admin")}>
            Exit
          </button>
        </div>

        <div className="admin-right">
          <div className="admin-card">
            <h1>USERS</h1>

            {erro && (
                <p style={{ color: "#ff6b6b", fontSize: "13px", marginBottom: "10px" }}>
                  {erro}
                </p>
            )}

            <div className="search-bar">
              <input
                  type="text"
                  placeholder="Search by email"
                  value={busca}
                  onChange={handleBusca}
              />
            </div>

            <table className="admin-table">
              <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {carregando ? (
                  <tr>
                    <td colSpan="3">Carregando...</td>
                  </tr>
              ) : usuarios.length === 0 ? (
                  <tr>
                    <td colSpan="3">Nenhum usuário encontrado.</td>
                  </tr>
              ) : (
                  usuarios.map(u => (
                      <tr key={u.id}>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>
                          <button
                              className="btn-delete"
                              onClick={() => handleDeletar(u.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                  ))
              )}
              </tbody>
            </table>

            <footer className="admin-footer">
              Projeto acadêmico SENACSP
            </footer>
          </div>
        </div>
      </div>
  );
}

export default Users;