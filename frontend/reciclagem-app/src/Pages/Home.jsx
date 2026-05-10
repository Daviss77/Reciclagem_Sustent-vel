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
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
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

            <main className="home-content" style={{paddingTop: "90px"}}>

                {/* HERO */}
                <div className="hero">
                    <div className="card">
                        <h2>Transforme o mundo com pequenas atitudes</h2>
                        <p>Cada reciclagem faz a diferença</p>
                    </div>
                </div>

                {/* SOBRE */}
                <section ref={sobreRef} className="section">
                    <h2>Sobre</h2>
                    <p>
                        Somos uma plataforma dedicada a conectar pessoas e organizações
                        comprometidas com a reciclagem e a sustentabilidade. Nossa missão
                        é tornar a reciclagem acessível e simples para todos. Acreditamos
                        que pequenas atitudes diárias podem transformar o planeta. Juntos,
                        construímos um futuro mais verde e consciente para as próximas gerações.
                        Faça parte dessa mudança e contribua com o meio ambiente hoje mesmo.
                    </p>
                </section>

                {/* TIPOS */}
                <section ref={tiposRef} className="section">
                    <h2>Tipos de Reciclagem</h2>
                    <p>
                        Existem diversos tipos de materiais recicláveis no nosso dia a dia:
                        papel, papelão, plástico, vidro, metal e resíduos eletrônicos. Cada
                        material possui um processo de reciclagem diferente e um impacto
                        ambiental específico. O papel reciclado economiza água e árvores.
                        O plástico reduz a poluição dos oceanos. O vidro pode ser reciclado
                        infinitas vezes sem perder qualidade. Conhecer cada tipo é o primeiro
                        passo para descartar corretamente.
                    </p>
                </section>

                {/* BENEFÍCIOS */}
                <section ref={beneficiosRef} className="section">
                    <h2>Benefícios</h2>
                    <p>
                        Reciclar traz benefícios ambientais, econômicos e sociais. Reduz a
                        quantidade de lixo nos aterros sanitários, diminui a emissão de gases
                        poluentes e economiza energia na produção de novos materiais. Além disso,
                        gera empregos na cadeia de reciclagem e contribui para uma economia
                        circular mais sustentável. Cada tonelada de papel reciclado salva cerca
                        de 20 árvores. Pequenas ações somadas fazem uma grande diferença.
                    </p>
                </section>

                {/* DICAS */}
                <section ref={dicasRef} className="section">
                    <h2>Dicas</h2>
                    <p>
                        Separe o lixo em casa utilizando lixeiras coloridas para cada tipo de
                        material. Lave as embalagens antes de descartar para evitar contaminação.
                        Procure pontos de coleta seletiva próximos à sua residência. Evite
                        misturar resíduos orgânicos com recicláveis. Prefira produtos com menos
                        embalagem e opte por embalagens retornáveis quando possível. Compartilhe
                        essas dicas com amigos e familiares e multiplique o impacto positivo
                        no meio ambiente.
                    </p>
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