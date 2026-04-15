"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section
        className="home-hero"
        style={{
          textAlign: "center",
          padding: "80px 20px"
        }}
      >
        <h1 style={{
          fontSize: "40px",
          marginBottom: "20px"
        }}>

          Advocacia com seriedade e discrição.

        </h1>

        <p style={{
          maxWidth: "600px",
          margin: "0 auto",
          marginBottom: "30px",
          fontSize: "20px",
        }}>
          Atuação em Direito Penal e Trabalhista, com atendimento profissional e foco na defesa dos direitos do cliente.
        </p>

        <Link href="/contato" style={{
          backgroundColor: "#c5b99e",
          color: "#490b23",
          padding: "12px 24px",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "500"
        }}>
          Plantão 24 Horas
        </Link>
      </section>

      {/* ================= COMPROMISSOS ================= */}
      <section style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px"
      }}>

        <h2 style={{
          fontSize: "30px",
          color: "#490b23",
          marginBottom: "40px",
          textAlign: "center"
        }}>
          Compromissos Profissionais
        </h2>

        {/* GRID */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px"
        }}>

          {/* CARD */}
          {[
            {
              titulo: "Comunicação Clara e Estratégica",
              texto: "Atuação pautada por comunicação precisa e acessível, garantindo ao cliente compreensão completa de cada etapa do processo."
            },
            {
              titulo: "Atendimento Digital de Excelência",
              texto: "Atendimento online em todo o Brasil, com agilidade, organização e acompanhamento jurídico contínuo."
            },
            {
              titulo: "Transparência e Segurança Jurídica",
              texto: "Clareza total sobre procedimentos, prazos e cenários, proporcionando confiança nas decisões."
            },
            {
              titulo: "Atendimento Humanizado",
              texto: "Escuta qualificada e abordagem personalizada, respeitando a realidade de cada cliente."
            },
            {
              titulo: "Suporte a Famílias",
              texto: "Orientação jurídica e acompanhamento para famílias de pessoas privadas de liberdade, com discrição e responsabilidade."
            },
            {
              titulo: "Ética e Excelência",
              texto: "Atuação rigorosamente alinhada ao Código de Ética da OAB, com técnica e compromisso."
            }
          ].map((item, index) => (
            <div key={index} style={{
              border: "1px solid #e5e5e5",
              borderRadius: "8px",
              padding: "25px",
              backgroundColor: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease"
            }}>

              <h3 style={{
                fontSize: "20px",
                color: "#490b23",
                marginBottom: "12px"
              }}>
                {item.titulo}
              </h3>

              <p style={{
                fontSize: "15px",
                lineHeight: "1.7"
              }}>
                {item.texto}
              </p>

            </div>
          ))}

        </div>

        {/* CTA FINAL */}
        <div style={{
          textAlign: "center",
          marginTop: "50px"
        }}>
          <Link href="/contato" style={{
            backgroundColor: "#490b23",
            color: "white",
            padding: "14px 28px",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "14px"
          }}>
            Fale com um advogado agora
          </Link>
        </div>

      </section>

    </main>
  );
}