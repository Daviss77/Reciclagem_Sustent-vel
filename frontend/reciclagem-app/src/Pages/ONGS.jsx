import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:8080";

// Serviço de ONGs
async function buscarOngs(nome = "") {
  const url = nome
      ? `${BASE_URL}/ongs?name=${encodeURIComponent(nome)}`
      : `${BASE_URL}/ongs`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Erro ao buscar ONGs");
  return response.json();
}

async function criarOng(dados) {
  const response = await fetch(`${BASE_URL}/ongs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  if (!response.ok) throw new Error("Erro ao criar ONG");
  return response.json();
}

async function atualizarOng(id, dados) {
  const response = await fetch(`${BASE_URL}/ongs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  if (!response.ok) throw new Error("Erro ao atualizar ONG");
  return response.json();
}

async function deletarOng(id) {
  const response = await fetch(`${BASE_URL}/ongs/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Erro ao deletar ONG");
}

// Formulário vazio padrão
const formVazio = {
  name: "",
  description: "",
  email: "",
  phone: "",
  address: "",
  imageUrl: "",
};

function Ongs() {
  const navigate = useNavigate();

  const [ongs, setOngs] = useState([]);
  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  // Controle do modal
  const [modalAberto, setModalAberto] = useState(false);
  const [ongEditando, setOngEditando] = useState(null); // null = criando, objeto = editando
  const [formData, setFormData] = useState(formVazio);

  // Carrega ONGs ao montar e ao buscar
  useEffect(() => {
    carregarOngs();
  }, []);

  async function carregarOngs(nome = "") {
    setCarregando(true);
    setErro(null);
    try {
      const data = await buscarOngs(nome);
      setOngs(data);
    } catch (err) {
      setErro("Erro ao carregar ONGs.");
    } finally {
      setCarregando(false);
    }
  }

  function handleBusca(e) {
    const valor = e.target.value;
    setBusca(valor);
    carregarOngs(valor);
  }

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // Abre modal para criar
  function abrirModalCriar() {
    setOngEditando(null);
    setFormData(formVazio);
    setModalAberto(true);
  }

  // Abre modal para editar
  function abrirModalEditar(ong) {
    setOngEditando(ong);
    setFormData({
      name: ong.name,
      description: ong.description,
      email: ong.email,
      phone: ong.phone,
      address: ong.address,
      imageUrl: ong.imageUrl || "",
    });
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
    setOngEditando(null);
    setFormData(formVazio);
  }

  async function handleSalvar() {
    try {
      if (ongEditando) {
        await atualizarOng(ongEditando.id, formData);
      } else {
        await criarOng(formData);
      }
      fecharModal();
      carregarOngs(busca);
    } catch (err) {
      setErro("Erro ao salvar ONG.");
    }
  }

  async function handleDeletar(id) {
    if (!window.confirm("Deseja realmente deletar esta ONG?")) return;
    try {
      await deletarOng(id);
      carregarOngs(busca);
    } catch (err) {
      setErro("Erro ao deletar ONG.");
    }
  }

  return (
      <div className="admin-container">

        <div className="admin-left">
          <div>
            <h2>Hello, administrator!</h2>
            <p>Administrator query screen.</p>
          </div>
          <button className="btn-exit" onClick={() => navigate("/admin")}>
            Exit
          </button>
        </div>

        <div className="admin-right">
          <div className="admin-card">
            <h1>ONGS</h1>

            {erro && <p style={{ color: "red", fontSize: "13px" }}>{erro}</p>}

            <div className="search-bar">
              <input
                  type="text"
                  placeholder="Search by name"
                  value={busca}
                  onChange={handleBusca}
              />
            </div>

            <table className="admin-table">
              <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {carregando ? (
                  <tr>
                    <td colSpan="2">Carregando...</td>
                  </tr>
              ) : ongs.length === 0 ? (
                  <tr>
                    <td colSpan="2">Nenhuma ONG encontrada.</td>
                  </tr>
              ) : (
                  ongs.map(ong => (
                      <tr key={ong.id}>
                        <td>{ong.name}</td>
                        <td>
                          <button
                              className="btn-edit"
                              onClick={() => abrirModalEditar(ong)}
                          >
                            Edit
                          </button>
                          <button
                              className="btn-delete"
                              onClick={() => handleDeletar(ong.id)}
                          >
                            Del
                          </button>
                        </td>
                      </tr>
                  ))
              )}
              </tbody>
            </table>

            <button className="btn-edit" onClick={abrirModalCriar}>
              Insert partners ONG's
            </button>

            <footer className="admin-footer">
              Projeto acadêmico SENACSP
            </footer>
          </div>
        </div>

        {/* MODAL CRIAR / EDITAR */}
        {modalAberto && (
            <div style={estilos.overlay}>
              <div style={estilos.modal}>
                <h2>{ongEditando ? "Editar ONG" : "Nova ONG"}</h2>

                {["name", "description", "email", "phone", "address", "imageUrl"].map(campo => (
                    <div key={campo} style={{ marginBottom: "10px" }}>
                      <input
                          type="text"
                          name={campo}
                          placeholder={campo}
                          value={formData[campo]}
                          onChange={handleChange}
                          style={estilos.input}
                      />
                    </div>
                ))}

                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  <button className="btn-edit" onClick={handleSalvar}>
                    Salvar
                  </button>
                  <button className="btn-delete" onClick={fecharModal}>
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
        )}

      </div>
  );
}

const estilos = {
  overlay: {
    position: "fixed", inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#fff", borderRadius: "12px",
    padding: "2rem", width: "400px", maxWidth: "90%",
  },
  input: {
    width: "100%", padding: "8px 12px",
    borderRadius: "6px", border: "1px solid #ccc",
    fontSize: "14px", boxSizing: "border-box",
  },
};

export default Ongs;