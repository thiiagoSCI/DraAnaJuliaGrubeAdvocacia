import Link from "next/link";

export default function Contato() {
    return (
        <section style={{
            width: "100%"
        }}>

            {/* TÍTULO */}
            <h1 style={{
                fontSize: "35px",
                color: "#490b23",
                marginBottom: "10px",
                textAlign: "center"
            }}>
                Contato
            </h1>

            <p style={{
                fontSize: "24px",
                textAlign: "center",
                marginBottom: "50px"
            }}>
                Entre em contato através do WhatsApp, Instagram ou, se preferir, envie um e-mail.
            </p>

            {/* CARDS DE CONTATO */}
            <div
                className="contato-cards"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                    marginBottom: "60px"
                }}
            >

                {/* WHATSAPP */}
                <a
                    href="https://wa.me/5548991410409"
                    target="_blank"
                    className="contato-card"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid #e5e5e5",
                        borderRadius: "10px",
                        padding: "35px 40px",
                        textDecoration: "none",
                        color: "black",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                        transition: "all 0.3s ease"
                    }}
                >

                    <div className="contato-card-content">
                        <h3 style={{
                            color: "#490b23",
                            fontSize: "30px",
                            marginBottom: "10px"
                        }}>
                            WhatsApp
                        </h3>

                        <p style={{
                            fontSize: "20px",
                            maxWidth: "600px"
                        }}>
                            Atendimento para dúvidas, orientações jurídicas e suporte imediato. Plantão 24h.
                        </p>
                    </div>

                    <span className="contato-card-action" style={{
                        color: "#c5b99e",
                        fontSize: "17px",
                        fontWeight: "500"
                    }}>
                        Acessar →
                    </span>

                </a>

                {/* INSTAGRAM */}
                <a
                    href="https://www.instagram.com/adv.anajuliagrube/"
                    target="_blank"
                    className="contato-card"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid #e5e5e5",
                        borderRadius: "10px",
                        padding: "35px 40px",
                        textDecoration: "none",
                        color: "black",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.05)"
                    }}
                >

                    <div className="contato-card-content">
                        <h3 style={{
                            color: "#490b23",
                            fontSize: "30px",
                            marginBottom: "10px"
                        }}>
                            Instagram
                        </h3>

                        <p style={{
                            fontSize: "20px",
                            maxWidth: "600px"
                        }}>
                            Acompanhe conteúdos jurídicos e novidades legislativas.
                        </p>
                    </div>

                    <span className="contato-card-action" style={{
                        color: "#c5b99e",
                        fontSize: "17px",
                        fontWeight: "500"
                    }}>
                        Acessar →
                    </span>

                </a>

                {/* linkedin */}
                <a
                    href="https://www.linkedin.com/in/anajuliagrube/"
                    target="_blank"
                    className="contato-card"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid #e5e5e5",
                        borderRadius: "10px",
                        padding: "35px 40px",
                        textDecoration: "none",
                        color: "black",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.05)"
                    }}
                >

                    <div className="contato-card-content">
                        <h3 style={{
                            color: "#490b23",
                            fontSize: "30px",
                            marginBottom: "10px"
                        }}>
                            LinkedIn
                        </h3>

                        <p style={{
                            fontSize: "20px",
                            maxWidth: "600px"
                        }}>
                            Acompanhe meu perfil profissional jurídico e atualizações de carreira.
                        </p>
                    </div>

                    <span className="contato-card-action" style={{
                        color: "#c5b99e",
                        fontSize: "17px",
                        fontWeight: "500"
                    }}>
                        Acessar →
                    </span>

                </a>

                {/* EMAIL */}
                <a
                    href="mailto:grubeanajulia@gmail.com"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid #e5e5e5",
                        borderRadius: "10px",
                        padding: "35px 40px",
                        textDecoration: "none",
                        color: "black",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.05)"
                    }}
                >

                    <div>
                        <h3 style={{
                            color: "#490b23",
                            fontSize: "30px",
                            marginBottom: "10px"
                        }}>
                            E-mail
                        </h3>

                        <p style={{
                            fontSize: "20px",
                            maxWidth: "600px"
                        }}>
                            Prefere formalizar sua dúvida? Envie um e-mail para: advanajuliagrube@gmail.com
                        </p>
                    </div>

                    <span style={{
                        color: "#c5b99e",
                        fontSize: "17px",
                        fontWeight: "500"
                    }}>
                        Enviar →
                    </span>

                </a>

            </div>

        </section>
    );
}