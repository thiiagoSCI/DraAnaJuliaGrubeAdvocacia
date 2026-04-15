import Image from "next/image";

export default function Blog() {
  return (
    <main style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "80px 20px"
    }}>

      {/* TÍTULO */}
      <h1 style={{
        fontSize: "32px",
        color: "#490b23",
        marginBottom: "40px"
      }}>
        Artigos e Publicações
      </h1>

      {/* LISTA DE POSTS */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px"
      }}>

        {/* ================= CARD 1 ================= */}
        
        <div style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #e5e5e5",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}>
          {/* IMAGEM */}
          <Image
            src="/439048E8-DF9B-47E4-AB44-5F4303280CA4.png"
            alt="JIC 16"
            width={1200}
            height={400}
            style={{
              width: "100%",
              height: "500px",
              objectFit: "contain"
            }}
          />

          {/* CONTEÚDO */}
          <div style={{ padding: "25px" }}>

            <h2 style={{
              fontSize: "22px",
              color: "#490b23",
              marginBottom: "1px"
            }}>
              Artigo publicado na 16º Jornada de Iniciação e Inovação Científica (JIIC)
            </h2>
            <h2 style={{
              fontSize: "15px",
              color: "#490b23",
              marginBottom: "10px"
            }}>
              08 de Outubro de 2025
            </h2>

            <p style={{
              fontSize: "16px",
              marginBottom: "20px"
            }}>
              Artigo publicado nos cadernos da 16ª Jornada de Iniciação e Inovação Científica tratando dos desdobramentos da privacidade e dos direitos fundamentais no contexto da sociedade digital.
            </p>

            <a
              href="https://unicesusc-prd.s3.amazonaws.com/wp-content/uploads/2026/02/18130419/Cadernos-16a-JIIC-2025.pdf#page=140"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#490b23",
                color: "white",
                padding: "10px 20px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "14px"
              }}
            >
              Ver mais
            </a>



          </div>
        </div>

        {/* ================= CARD 2 ================= */}

        <div style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #e5e5e5",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}>

          {/* IMAGEM */}
          <Image
            src="/artigo2.png"
            alt="Reforma constitucional"
            width={1200}
            height={400}
            style={{
              width: "100%",
              height: "350px",
              objectFit: "contain"
            }}
          />

          {/* CONTEÚDO */}
          <div style={{ padding: "25px" }}>

            <h2 style={{
              fontSize: "22px",
              color: "#490b23",
              marginBottom: "1px"
            }}>
              Artigo publicado - Reforma constitucional: da repressão aos crimes contra a ordem tributária
            </h2>
            <h2 style={{
              fontSize: "15px",
              color: "#490b23",
              marginBottom: "10px"
            }}>
              21 de Agosto de 2025
            </h2>

            <p style={{
              fontSize: "16px",
              marginBottom: "20px"
            }}>
              Artigo publicado no Consultor Jurídico trazendo aspectos da repressão aos crimes contra a ordem
              tributária e seus impactos no cenário jurídico brasileiro pós reforma tributária.
            </p>

            <a
              href="https://www.conjur.com.br/2025-ago-21/reforma-constitucional-da-repressao-aos-crimes-contra-a-ordem-tributaria/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#490b23",
                color: "white",
                padding: "10px 20px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "14px"
              }}
            >
              Ver mais
            </a>

          </div>
        </div>

        {/* ================= CARD 3 ================= */}

        <div style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #e5e5e5",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}>

          {/* IMAGEM */}
          <Image
            src="/artigo1.jpg"
            alt="Prêmio Jurista"
            width={1200}
            height={400}
            style={{
              width: "100%",
              height: "600px",
              objectFit: "contain"
            }}
          />

          {/* CONTEÚDO */}
          <div style={{ padding: "25px" }}>

            <h2 style={{
              fontSize: "22px",
              color: "#490b23",
              marginBottom: "1px"
            }}>
              Prêmio Dora Lucia de Lima Faye pela categoria Melhor Monografia
            </h2>
            <h2 style={{
              fontSize: "15px",
              color: "#490b23",
              marginBottom: "10px"
            }}>
              30 de Setembro de 2025
            </h2>

            <p style={{
              fontSize: "16px",
              marginBottom: "20px"
            }}>
              Com o trabalho “Violência Institucional e Abuso de Poder nos Presídios Brasileiros: desafios para ressocialização e violações dos Direitos Humanos”,
              a aluna analisou as violações de direitos humanos no sistema prisional brasileiro, destacando os impactos desse cenário na ressocialização dos detentos.
            </p>

            <a
              href="https://unicesusc.edu.br/concurso-de-monografias-jurista-dora-lucia-de-lima-faye-premia-trabalhos-de-conclusao-de-curso-tccs-na-area-do-direito/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#490b23",
                color: "white",
                padding: "10px 20px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "14px"
              }}
            >
              Ver mais
            </a>

          </div>
        </div>
      </div>

    </main>
  );
}