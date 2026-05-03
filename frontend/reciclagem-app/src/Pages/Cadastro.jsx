import "./css/Cadastro.css";
import { useNavigate } from "react-router-dom";

function Cadastro() {
    const navigate = useNavigate();

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
                        <input type="text" placeholder="Nome" />
                    </div>

                    <div className="input-group">
                        <label>Data de nascimento</label>
                        <input type="date"/>
                    </div>

                    <div className="input-group">
                        <input type="email" placeholder="Email" />
                    </div>

                    <div className="input-group">
                        <input type="password" placeholder="Senha" />
                    </div>

                    <button onClick={() => navigate("/home")}>
                        Cadastrar
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