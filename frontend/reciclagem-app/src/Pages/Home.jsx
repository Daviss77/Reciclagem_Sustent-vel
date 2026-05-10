import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:8080";

async function buscarOngs() {
    const response = await fetch(`${BASE_URL}/ongs`);
    if (!response.ok) throw new Error("Erro ao buscar ONGs");
    return response.json();
}

function Home() {
    const navigate = useNavigate();
    const [ongs, setOngs] = useState([]);

    const sobreRef = useRef(null);
    const tiposRef = useRef(null);
    const beneficiosRef = useRef(null);
    const dicasRef = useRef(null);
    const ongRef = useRef(null);
    const contatoRef = useRef(null);

    useEffect(() => {
        buscarOngs()
            .then(data => setOngs(data))
            .catch(err => console.error(err));
    }, []);

    function scrollTo(ref) {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="home-container">

            {/* NAVBAR — style inline para não depender de CSS externo */}
            <nav style={{
                backgroundColor: "#008150",
                textAlign: "center",
                padding: "15px",
                color: "white",
                position: "sticky",
                top: 0,
                zIndex: 100
            }}>
                <h1 style={{ margin: "0 0 10px 0", fontSize: "24px" }}>
                    Reciclagem Sustentável
                </h1>
                <ul style={{
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                    padding: 0,
                    margin: 0
                }}>
                    <li onClick={() => scrollTo(sobreRef)} style={{ cursor: "pointer", color: "white" }}>Sobre</li>
                    <li onClick={() => scrollTo(tiposRef)} style={{ cursor: "pointer", color: "white" }}>Tipos</li>
                    <li onClick={() => scrollTo(beneficiosRef)} style={{ cursor: "pointer", color: "white" }}>Benefícios</li>
                    <li onClick={() => scrollTo(dicasRef)} style={{ cursor: "pointer", color: "white" }}>Dicas</li>
                    <li onClick={() => scrollTo(ongRef)} style={{ cursor: "pointer", color: "white" }}>ONG</li>
                    <li onClick={() => scrollTo(contatoRef)} style={{ cursor: "pointer", color: "white" }}>Contato</li>
                </ul>
            </nav>

            <main className="home-content">

                {/* HERO */}
                <div className="hero">
                    <div className="card">
                        <h2>Transforme o mundo com pequenas atitudes</h2>
                        <p>Cada reciclagem faz a diferença</p>
                    </div>
                </div>

                {/* SOBRE */}
                <section ref={sobreRef} className="section sobre-section">

                    <h2 className="section-title">
                        🌿 Sobre Nós
                    </h2>

                    <div className="sobre-container">

                        <div className="sobre-card">

                            <div className="sobre-icon">
                                ♻️
                            </div>

                            <p>
                                Somos uma plataforma dedicada a conectar pessoas e organizações
                                comprometidas com a reciclagem e a sustentabilidade.
                            </p>

                            <p>
                                Nossa missão é tornar a reciclagem acessível e simples para todos.
                                Acreditamos que pequenas atitudes diárias podem transformar o planeta.
                            </p>

                            <div className="sobre-destaque">
                                🌎 Juntos, construímos um futuro mais verde e consciente
                                para as próximas gerações.
                            </div>

                            <p>
                                Faça parte dessa mudança e contribua com o meio ambiente hoje mesmo.
                            </p>

                        </div>

                    </div>

                </section>

                {/* TIPOS */}
                <section ref={tiposRef} className="section">
                    <h2 className="section-title">Tipos de Reciclagem</h2>

                    <div className="tipos-grid">

                        <div className="tipo-card papel">
                            <div className="icon">📄</div>
                            <h3>Papel</h3>
                            <p>
                                Jornais, revistas, caixas e papelão podem ser reciclados
                                e transformados em novos produtos.
                            </p>
                        </div>

                        <div className="tipo-card plastico">
                            <div className="icon">🧴</div>
                            <h3>Plástico</h3>
                            <p>
                                Garrafas PET, embalagens e recipientes ajudam a reduzir
                                a poluição dos oceanos.
                            </p>
                        </div>

                        <div className="tipo-card vidro">
                            <div className="icon">🍾</div>
                            <h3>Vidro</h3>
                            <p>
                                O vidro pode ser reciclado infinitas vezes sem perder
                                qualidade.
                            </p>
                        </div>

                        <div className="tipo-card metal">
                            <div className="icon">🥫</div>
                            <h3>Metal</h3>
                            <p>
                                Latas de alumínio e aço retornam para a indústria com
                                grande economia de energia.
                            </p>
                        </div>

                        <div className="tipo-card eletronico">
                            <div className="icon">💻</div>
                            <h3>Eletrônicos</h3>
                            <p>
                                Celulares, computadores e cabos precisam de descarte
                                correto para evitar contaminação.
                            </p>
                        </div>

                    </div>
                </section>

                {/* BENEFÍCIOS */}
                <section ref={beneficiosRef} className="section beneficios-section">

                    <h2 className="section-title">
                        ♻️ Benefícios
                    </h2>

                    <div className="beneficios-container">

                        <div className="beneficios-texto">
                            <p>
                                Reciclar traz benefícios ambientais, econômicos e sociais.
                                Reduz a quantidade de lixo nos aterros sanitários, diminui
                                a emissão de gases poluentes e economiza energia na produção
                                de novos materiais.
                            </p>

                            <p>
                                Além disso, gera empregos na cadeia de reciclagem e contribui
                                para uma economia circular mais sustentável.
                            </p>

                            <div className="beneficio-destaque">
                                🌳 Cada tonelada de papel reciclado salva cerca de
                                <strong> 20 árvores.</strong>
                            </div>

                            <p>
                                Pequenas ações somadas fazem uma grande diferença.
                            </p>
                        </div>

                    </div>

                </section>

                {/* DICAS */}
                <section ref={dicasRef} className="section dicas-section">

                    <h2 className="section-title">
                        💡 Dicas de Reciclagem
                    </h2>

                    <div className="dicas-container">

                        <div className="dica-item">
                            <span className="dica-icon">🗑️</span>
                            <p>
                                Separe o lixo em casa utilizando lixeiras coloridas
                                para cada tipo de material.
                            </p>
                        </div>

                        <div className="dica-item">
                            <span className="dica-icon">🚿</span>
                            <p>
                                Lave as embalagens antes de descartar para evitar
                                contaminação.
                            </p>
                        </div>

                        <div className="dica-item">
                            <span className="dica-icon">📍</span>
                            <p>
                                Procure pontos de coleta seletiva próximos à sua residência.
                            </p>
                        </div>

                        <div className="dica-item">
                            <span className="dica-icon">♻️</span>
                            <p>
                                Evite misturar resíduos orgânicos com recicláveis.
                            </p>
                        </div>

                        <div className="dica-item">
                            <span className="dica-icon">📦</span>
                            <p>
                                Prefira produtos com menos embalagem e opte por embalagens
                                retornáveis quando possível.
                            </p>
                        </div>

                        <div className="dica-item destaque-dica">
                            <span className="dica-icon">🌍</span>
                            <p>
                                Compartilhe essas dicas com amigos e familiares e multiplique
                                o impacto positivo no meio ambiente.
                            </p>
                        </div>

                    </div>

                </section>

                {/* ONGs */}
                <section ref={ongRef} className="section">
                    <h2>ONGs Parceiras</h2>
                    {ongs.length === 0 ? (
                        <p>Nenhuma ONG cadastrada no momento.</p>
                    ) : (
                        <div className="ong-list">
                            {ongs.map(ong => (
                                <div key={ong.id} className="ong-card">
                                    {ong.imageUrl && (
                                        <img
                                            src={ong.imageUrl}
                                            alt={ong.name}
                                            className="ong-image"
                                        />
                                    )}
                                    <h3>{ong.name}</h3>
                                    <p>{ong.description}</p>
                                    <p>📧 {ong.email}</p>
                                    <p>📞 {ong.phone}</p>
                                    <p>📍 {ong.address}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* CONTATO */}
                <section ref={contatoRef} className="section">
                    <h2>Contato</h2>
                    <p>
                        Entre em contato conosco pelo e-mail: contato@reciclagem.com.
                        Nossa equipe está disponível de segunda a sexta, das 9h às 18h,
                        para responder dúvidas, receber sugestões e firmar novas parcerias.
                        Também estamos presentes nas redes sociais — siga-nos e fique por
                        dentro das novidades sobre reciclagem e sustentabilidade.
                        Sua mensagem é muito importante para nós!
                    </p>
                </section>

            </main>

            <footer className="footer">
                Projeto acadêmico SENACSP
            </footer>

        </div>
    );
}

export default Home;