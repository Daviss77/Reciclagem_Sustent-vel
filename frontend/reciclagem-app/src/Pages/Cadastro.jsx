import "./css/Cadastro.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { criarUsuario } from "../services/userService";

function Cadastro() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        birthDate: "",
        email: "",
        password: ""
    });

    const [erro, setErro] = useState(null);
    const [carregando, setCarregando] = useState(false);

    function handleChange(e) {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    async function handleCadastro() {
        setErro(null);
        setCarregando(true);

        try {
            await criarUsuario(formData);
            navigate("/");
        } catch (err) {
            setErro("Erro ao cadastrar. Verifique os dados e tente novamente.");
        } finally {
            setCarregando(false);
        }
    }

    return (
        <div className="cadastro-container">
            {/* LADO VERDE */}
            <div className="left">
                <div className="content">
                    <h1>
                        CRIE SUA <br /> CONTA
                    </h1>
                    <p>
                        Faça parte da mudança! Cadastre-se e comece a contribuir
                        com práticas sustentáveis, encontrando pontos de coleta
                        e aprendendo a reciclar corretamente.
                    </p>
                </div>
            </div>

            {/* LADO DIREITO */}
            <div className="right">
                <div className="content">
                    <h2>CADASTRO</h2>

                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Data de nascimento</label>
                        <input
                            type="date"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Senha"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    {erro && (
                        <p style={{ color: "red", fontSize: "13px" }}>{erro}</p>
                    )}

                    <button onClick={handleCadastro} disabled={carregando}>
                        {carregando ? "Cadastrando..." : "Cadastrar"}
                    </button>

                    <p>
                        Já possui conta?{" "}
                        <a href="/" onClick={() => navigate("/")}>
                            Faça login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;