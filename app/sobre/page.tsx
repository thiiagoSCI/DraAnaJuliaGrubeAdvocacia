import Image from "next/image";

export default function Sobre() {
  return (
    <main style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "80px 20px"
    }}>

      {/* BLOCO FOTO + TEXTO */}
      <div
        className="sobre-topo"
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          marginBottom: "40px"
        }}
      >

        {/* FOTO */}
        <Image
          src="/anaplenario.jpg"
          alt="Ana Julia Grube"
          width={300}
          height={300}
          style={{
            width: "100%",
            maxWidth: "320px",
            height: "auto",
            borderRadius: "8px",
            objectFit: "cover"
          }}
        />

        {/* TEXTO */}
        <div>
          <h1 style={{
            fontSize: "28px",
            color: "#490b23",
            marginBottom: "10px"
          }}>
            Ana Julia Grube - OAB/SC 78.503
          </h1>

          <p style={{ marginBottom: "10px" }}>
            Advogada atuante na área de Direito Penal, Direito Trabalhista, Consultoria Jurídica e Mediação Extrajudicial, com foco na defesa
            dos direitos individuais e atuação estratégica adaptada ao caso concreto.
          </p>

          <p>
            Atendimento com seriedade, discrição e compromisso com cada cliente.
          </p>
        </div>

      </div>

      <div>

        <p style={{ marginBottom: "20px" }}>
          Bacharela em Direito pelo Centro Universitário Unicesusc, também e Tecnóloga em Segurança Pública pelo Centro Universitário Leonardo da Vinci.
          Atualmente integra, como bolsista de Iniciação Científica, o Laboratório de Pesquisa Crítica em Regulação e Tecnologia (LabSensus) e integrou o Laboratório de Ciências Criminais (IBCCRIM).
          Ao longo de sua formação acadêmica, atuou como estagiária no Presídio Feminino de Florianópolis e concluiu o estágio obrigatório supervisionado em Direito Penal.
          Também atuou como extensionista no projeto de extensão Inovacrim. Foi monitora das disciplinas de Ciência Política e Teoria do Estado e de Mediação, Conciliação e Negociação.
          É fluente em espanhol pela Expanish School em Buenos Aires. Recebeu bolsa de melhor desempenho acadêmico no Centro Universitário Unicesusc nos anos de 2024 e 2025 e, em 2025,
          também foi agraciada com o Prêmio Jurista Dora Lucia de Lima Faye.
        </p>

      </div>

      <div style={{ marginTop: "50px" }}>

        {/* FORMAÇÃO */}
        <h2 style={{
          color: "#490b23",
          fontSize: "26px",     
          marginTop: "40px",    
          marginBottom: "10px", 
        }}>
          Formação Acadêmica
        </h2>

        <ul style={{ paddingLeft: "0px" }}>
          <li>•Pós-graduanda em Direito Penal e Criminologia pela PUCRS</li>
          <li>•Bacharela em Direito pelo Centro Universitário Unicesusc</li>
          <li>•Tecnóloga em Segurança Pública pelo Centro Universitário Leonardo Da Vinci</li>
        </ul>

        {/* COMPLEMENTAR */}
        <h2 style={{
          color: "#490b23",
          fontSize: "26px",     
          marginTop: "40px",   
          marginBottom: "10px", 
        }}>
          Formação Complementar
        </h2>

        <ul style={{ paddingLeft: "0px" }}>
          <li>•Curso de formação em Conciliação Judicial pela Academia Judicial de Santa Catarina (AJSC)</li>
          <li>•Domínio em Espanhol pela Expanish School em Buenos Aires, Argentina</li>
          <li>•Noções Basicas de Direito Administrativo pela Universidade Estadual do Maranhão (UEMA)</li>
        </ul>

        {/* EXPERIÊNCIA */}
        <h2 style={{
          color: "#490b23",
          fontSize: "26px",
          marginTop: "40px",
          marginBottom: "10px",
        }}>
          Experiência Profissional
        </h2>

        <ul style={{ paddingLeft: "0px" }}>
          <li>•Atuação no Presídio Feminino com suporte jurídico em execução penal</li>
          <li>•Estágio em Direito Penal com atuação em processos criminais</li>
          <li>•Participação em projetos de pesquisa e extensão na área penal</li>
        </ul>

        {/* PRÊMIOS */}
        <h2 style={{
          color: "#490b23",
          fontSize: "26px",
          marginTop: "40px",
          marginBottom: "10px",
        }}>
          Prêmios e Reconhecimentos
        </h2>

        <ul style={{ paddingLeft: "0px" }}>
          <li>•Prêmio Dora Lucia de Lima Faye pela categoria Melhor Monografia – UNICESUSC</li>
          <li>•Bolsa Desempenho Acadêmico 2024</li>
          <li>•Bolsa Desempenho Acadêmico 2025</li>
        </ul>

      </div>

      {/* CONTATO VIA QR CODE */}
      <div style={{ marginTop: "60px" }}>

        <h2 style={{
          color: "#490b23",
          fontSize: "26px",
          marginBottom: "20px"
        }}>
          Conecte-se
        </h2>

        <div style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap"
        }}>

          {/* CNPq */}
          <div style={{ textAlign: "center" }}>
            <a
              href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K1539792J7&tokenCaptchar=0cAFcWeA4dXE1qxqJpwPk4aDOLm6M5NdU2qUvvUiK1raVv3DWxWEuZgmtxq1vgzrmu6Z8zKnI6Ctq4qGlQe5N3urb7kiUJ5DKbjyN8UfH8Hvdg5FLPak4-3zFP93Bf2zXsKhDQdTW1tpBMGq6V9hPyxgVHOCg5lBVgwUTbYqNdk76UoxP8yyb_INEib4hWVdeOL5hlRH5tWtWdCj7MozGQFxyHin0Q14EzdCcpTFmgV2cl-OkmrWoI8Mg0Mblm6gvkjns_T32PdIqRwDUZQZZ6AnkS1bewTv0ybg3cFPmHlSIZF8fr19_Epj1Ls9epnUHddcgMRgF1V8Uc6F-sXKFrSX3-edSVwZaZTs5DRN-lLbB3KMMYYsKBg7l6QHKfb_4dPdAhgHuJAW3dUHC2bHR-om6wBdx6FoBpDn_HrkZkvVHoJkKS2_Nf_5E0PF2yBDbQTeVF4-Mh_Bro70PUOz7wFIa3HUJxoj-BwLjN0fRRqbJWAxfP6oE8Gocn9hMXetFcBnaVtQf9N9QzGDzSvbxvsxT5A1ELtPWZzoaxx4ZsonoREMfqzTqE7SDHwDgl-Q0EoIaQVSOvzD9Tv94YHJJvqp5pKGrw5pnbDoiQxI_b7ASSW4dlMKtO6LGNPrTfcKsXVvcssjhshwHHiJNK4DIN4PQOHxoasrT5NN59gwzERAd5D7rRmMqNZhxkfJOHicpB4H9IoMi97Moi-GL-8jV8I6xk4KcdIpmlBo5xDByQFLXUxsUyrvUpRL5SKldE00DcZb6nQ_wGEumPU8D-TY162rv8qck1gPPaQkq4QaiknNcQ36Qyq3b-mPCnfOxDVCe9OoU9pFt_hBkVtzCv1xbrgA4q7RmP1tdGqDU5XP9BqBgSh4yqHO-uannZ8BCyI6ThAyFJBVz77CSAO7vqctBXFSZuUZySoqSfZgaJLDXUreS1x5zsfsYAjiOgZ0DUONBQOZX_GXebEZNvGz6j0T1d79dTdzFI91MUU9wNO5G1JBDeRPOs0ieYqjVYNri2IhGdPoM5tVKXayV193i9PfuRC0JnKFg_BrcOi_BpEKEWMdjVx38-jiHgAPg_P56YrHUEnytiFJC1ygfUFubRTTtBqz3-j3BQNa-L61ZUwN5IYXCroThQo1x3FrHf9BxhV4X8-sxMB19kdl0ZNzKXSn3iubQCKnopnk2OYq4VFheHl4ej2UjjkPvz_-DEYGWAldkYLIhquR_BoCd8ld6vxERNjgjpKxuBwYIzVdQzdrfH9jpB1Edhq9gjoo0x_gmEdOAs9B_1GiKAZMUBNWqFlFVdOdF4Kq5j33UwO6USQe9gZMMW9pZPLdrQd4-rcSgOJW2XjdDsXjsxHoUxPIfVNC5sDZXtiYGORG5ofeGWjBbmw9CVtYX8yVXeTADAFAjxkpsFQKvY80tUneVxsSwdFGMA4uaffcELwrKoezd8n9MimJnjIBkih3CDwLafIPWI-b6V4sTo68gLc9w9KZ_eMWb75-uM4hfWSbn2b7CWzL2p1mYE_xGQtxjV_GrRWXBc0NqVmkALljVF7YdVN5qgDJ2ZiYmL_3clXAfvVr9QP3T90wYVDqTsnHeKfl8N8g49NbEBUM2kq-eoIgqvATdoWza5uiOIfJ5swdGyJRIORqBmI6-qK_gKF0Dl2kuVuJbN2yQfgtYMAr6JvV03ZMXF5cRVMqxS4nKWJYWtSTluBUF12O-LZcgj4x1PI7aDPUExWOkIIaEu_ATQUy6wKFvOgW6_JRbfKo9BkOY3nc2aWlVQKq3zfbuqXNWpMXMwyZpZLtHiaof_saqMl_QDIU_rjYQ7PzIPne8mN1xHt-d1ZGIftJtmbkYUU23DhhqJLuOtXxQEpgKBo74MQY-GgpnFfFVNIZRma4RM2NZJPeXmnBnj5VT2Mcq5LCt0mJs0Ya0NCNta2ccCV6KYs5jZJdxwf2mxekp7-C-7tM0bz8mZlRcNXE65ocyjI27xANEKoYG0FoVpF69BBqyihyWu-YtG9s6La37GVfLi0CzR2J9ij1r4k1FAgCWDKNO6lUek7zR_ky_U4dYgCVeBiIL4u9yMn9ZsWpLh4UQa9MOLZEVhj8DsBIOlZ90Juaze0auaJxKyLYthxewGsfsdpIA4WJGeGC_ZJdJgpe_O0RgE3lu-vpsgLJ9TBqo5XXNfcywKsasDTTlboWjKp5I8NVHKWCYd3c0oExzVUAQxxI5H6w"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/CnpqQR.jpg"
                alt="Lattes"
                width={200}
                height={200}
              />
            </a>

            <p style={{ marginTop: "10px" }}>
              CNPq
            </p>
          </div>

          {/* LINKEDIN */}
          <div style={{ textAlign: "center" }}>
            <a
              href="https://www.linkedin.com/in/anajuliagrube/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/LinkedinQR.jpg"
                alt="LinkedIn"
                width={200}
                height={200}
              />
            </a>

            <p style={{ marginTop: "10px" }}>
              LinkedIn
            </p>
          </div>

        </div>
      </div>

    </main>
  );
}