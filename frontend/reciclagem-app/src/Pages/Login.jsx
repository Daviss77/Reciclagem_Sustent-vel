import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/userService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

  async function handleLogin() {
    setErro(null);
    setCarregando(true);

    try {
      const usuario = await login(formData);

      // Salva o usuário na sessão para usar em outras telas
      sessionStorage.setItem("usuario", JSON.stringify(usuario));

      navigate("/home");
    } catch (err) {
      setErro("E-mail ou senha inválidos.");
    } finally {
      setCarregando(false);
    }
  }

  return (
      <div className="login-container">
        {/* LADO VERDE */}
        <div className="left">
          <div className="content">
            <h1>
              SEJA <br /> BEM <br /> VINDO!
            </h1>
            <p>
              Reciclar nunca foi tão fácil. Acesse guias de descarte,
              dicas de sustentabilidade e uma rede de ONGs em um só lugar.
              Junte-se ao movimento e mude a forma como você lida com seus resíduos.
            </p>
          </div>
        </div>

        {/* LADO DIREITO */}
        <div className="right">
          <div className="content">
            <h2>LOGIN</h2>

            <div className="input-group">
              <span>👤</span>
              <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <span>🔑</span>
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

            <button onClick={handleLogin} disabled={carregando}>
              {carregando ? "Entrando..." : "Entrar"}
            </button>

            <p>
              Não possui conta? <Link to="/cadastro">Cadastre-se aqui</Link>
            </p>
          </div>
        </div>
      </div>
  );
}

export default Login;