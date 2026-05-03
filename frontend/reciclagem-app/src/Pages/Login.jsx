import {Link, useNavigate} from "react-router-dom";

function Login() {
  useNavigate();
  return (
      <div className="login-container">
        {/* LADO VERDE (SOBREPOSTO) */}
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
              <input type="text" placeholder="Username" />
            </div>

            <div className="input-group">
              <span>🔑</span>
              <input type="password" placeholder="Password" />
            </div>

            <p>
              Não possui conta? <Link to="/cadastro">Cadastre-se aqui</Link>
            </p>
          </div>
        </div>
      </div>
  );
}

export default Login;