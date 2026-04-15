"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header style={{
      borderBottom: "8px solid #c5b99e",
      padding: "20px 40px",
      backgroundColor: "#490b23",
      position: "static",
      zIndex: 1000,
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
      }}>

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Ana Julia Grube"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "300px", height: "auto" }}
            priority
          />
        </Link>

        {/* BOTÃO HAMBÚRGUER — div no lugar de button */}
        <button
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          className="menu-mobile-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleToggle();
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* MENU NAV */}
        <nav
          className={`menu ${menuOpen ? "open" : ""}`}
          style={{ fontFamily: playfair.style.fontFamily }}
        >
          {/* Botão fechar dentro do menu */}
          <div
            role="button"
            tabIndex={0}
            onClick={handleClose}
            className="menu-close-btn"
          >

          </div>

          <Link href="/" className="menu-link" onClick={handleClose}>Home</Link>
          <Link href="/sobre" className="menu-link" onClick={handleClose}>Sobre</Link>
          <Link href="/areas" className="menu-link" onClick={handleClose}>Áreas de Atuação</Link>
          <Link href="/blog" className="menu-link" onClick={handleClose}>Blog</Link>
          <Link href="/contato" className="menu-link" onClick={handleClose}>Contato</Link>
        </nav>

        {/* OVERLAY */}
        {menuOpen && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="menu-overlay"
          />
        )}

      </div>
    </header>
  );
}