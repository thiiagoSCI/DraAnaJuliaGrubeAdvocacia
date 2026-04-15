import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>

        {/* HEADER — componente client separado */}
        <Header />

        {/* CONTEÚDO DAS PÁGINAS */}
        <main
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 20px",
          }}
        >
          {children}
        </main>

        {/* WHATSAPP FIXO */}
        <div className="whatsapp-container">
          <a
            href="https://wa.me/5548991410409?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20ajuda"
            className="whatsapp-fixo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="32"
              height="32"
              fill="white"
            >
              <path d="M16 3C9.4 3 4 8.4 4 15c0 2.6.8 5 2.2 7L4 29l7.2-2.2c1.9 1 4.1 1.6 6.3 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22c-2 0-3.9-.6-5.4-1.6l-.4-.2-4.3 1.3 1.3-4.2-.3-.4C6.1 18.4 5.5 16.7 5.5 15 5.5 10 10 5.5 16 5.5S26.5 10 26.5 15 22 25 16 25zm5.2-7.3c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1s-.8 1-.9 1.1c-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.2-.5-.4-.4-.7-.4h-.6c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.4s1 2.7 1.1 2.9c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
            </svg>
          </a>
          <div className="whatsapp-balao">Fale conosco!</div>
        </div>

        {/* FOOTER */}
        <footer
          style={{
            backgroundColor: "#1f1f1f",
            color: "#ffffff",
            padding: "40px 20px",
            marginTop: "80px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "30px",
            }}
          >
            {/* LOGO */}
            <div>
              <Image
                src="/logo.png"
                alt="Ana Julia Grube"
                width={200}
                height={80}
                style={{ width: "200px", height: "auto", filter: "brightness(0) invert(1)" }}
              />
              <p style={{ fontSize: "12px", marginTop: "20px", opacity: 0.6 }}>
                © 2026 Todos os direitos reservados.
              </p>
            </div>

            {/* CONTATO */}
            <div>
              <h4 style={{ fontSize: "20px", marginBottom: "20px" }}>Contato</h4>
              <p style={{ fontSize: "14px", marginBottom: "10px" }}>+55 (48) 99141-0409</p>
              <p style={{ fontSize: "14px" }}>grubeanajulia@gmail.com</p>
            </div>

            {/* REDES SOCIAIS */}
            <div>
              <h4 style={{ fontSize: "20px", marginBottom: "20px" }}>Redes Sociais</h4>
              <div style={{ display: "flex", gap: "20px" }}>
                <a href="https://www.instagram.com/adv.anajuliagrube/" target="_blank">
                  <img src="/instagramICON.png" alt="Instagram" width={24} />
                </a>
                <a href="https://www.linkedin.com/in/anajuliagrube/" target="_blank">
                  <img src="/linkedinICON.png" alt="LinkedIn" width={24} />
                </a>
                <a
                  href="https://wa.me/5548991410409?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20ajuda"
                  target="_blank"
                >
                  <img src="/whatsappICON.png" alt="WhatsApp" width={24} />
                </a>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}