import Image from "next/image";

export default function Areas() {
    return (
        <main style={{
            maxWidth: "1200px",
            margin: "0 auto",
            marginTop: "-80px",
            padding: "80px 20px",
            lineHeight: "1.6"
        }}>

            {/* DIREITO PENAL */}
            <section style={{ marginBottom: "50px" }}>
                <h2 style={{
                    fontSize: "30px",
                    color: "#490b23",
                    marginBottom: "10px",
                    fontWeight: "bold"
                }}>
                    Direito Penal
                </h2>

                <p style={{
                    marginBottom: "15px",
                    fontSize: "17px",
                    textAlign: "justify",
                }}>
                    Atuação especializada e estratégica na área penal, com foco na tutela dos direitos e garantias fundamentais em todas as fases da persecução penal: da investigação à execução da pena.
                </p>

                <p style={{
                    marginBottom: "20px",
                    fontSize: "17px",
                    textAlign: "justify",
                }}>
                    A condução dos casos é pautada pelo rigor técnico, análise individualizada e atuação humanizada, assegurando a plena observância do devido processo legal.
                </p>

                <p style={{
                    marginBottom: "5px",
                    fontSize: "22px",
                    fontWeight: "bold",
                }}>
                    Atividades:
                </p>
                <ul style={{
                    paddingLeft: "0px",
                    fontSize: "17px",
                }}>
                    <li>• Defesa técnica em processos criminais</li>
                    <li>• Atuação em investigações e acompanhamento em delegacia</li>
                    <li>• Audiências de custódia</li>
                    <li>• Impetração de habeas corpus</li>
                    <li>• Atuação em execução penal</li>
                </ul>
            </section>


            {/* DIREITO TRABALHISTA */}
            <section style={{ marginBottom: "50px" }}>
                <h2 style={{
                    fontSize: "30px",
                    color: "#490b23",
                    marginBottom: "10px",
                    fontWeight: "bold"
                }}>
                    Direito Trabalhista
                </h2>

                <p style={{
                    marginBottom: "15px",
                    fontSize: "17px",
                    textAlign: "justify",
                }}>
                    Atuação voltada à condução qualificada de demandas trabalhistas, com enfoque na proteção de direitos, prevenção de litígios e resolução eficiente de conflitos nas relações de trabalho.
                </p>

                <p style={{
                    marginBottom: "15px",
                    fontSize: "17px",
                    textAlign: "justify",
                }}>
                    A abordagem alia técnica jurídica, estratégia processual e sensibilidade às particularidades de cada caso, buscando soluções seguras e efetivas.
                </p>

                <p style={{
                    marginBottom: "5px",
                    fontSize: "22px",
                    fontWeight: "bold",
                }}>
                    Atividades:
                </p>
                <ul style={{
                    paddingLeft: "0px",
                    fontSize: "17px",
                }}>
                    <li>• Propositura e defesa em reclamações trabalhistas</li>
                    <li>• Assessoria em rescisões contratuais</li>
                    <li>• Análise de verbas rescisórias</li>
                    <li>• Negociação e formalização de acordos extrajudiciais</li>
                </ul>
            </section>


            {/* CONSULTORIA E MEDIAÇÃO */}
            <section>
                <h2 style={{
                    fontSize: "30px",
                    color: "#490b23",
                    marginBottom: "10px",
                    fontWeight: "bold"
                }}>
                    Consultoria Jurídica e Mediação Extrajudicial
                </h2>

                <p style={{
                    marginBottom: "15px",
                    fontSize: "17px",
                    textAlign: "justify",
                }}>
                    Atuação consultiva orientada à prevenção de riscos e à construção de soluções jurídicas estratégicas, com ênfase na mediação extrajudicial como instrumento de resolução célere, eficaz e menos litigiosa de conflitos.
                </p>

                <p style={{
                    marginBottom: "15px",
                    fontSize: "17px",

                }}>
                    O trabalho é desenvolvido com base em uma escuta qualificada, abordagem técnica e compromisso com soluções consensuais.
                </p>

                <p style={{
                    marginBottom: "5px",
                    fontSize: "22px",
                    fontWeight: "bold",
                }}>
                    Atividades:
                </p>
                <ul style={{
                    paddingLeft: "0px",
                    fontSize: "17px",
                }}>
                    <li>• Elaboração, análise e revisão de contratos</li>
                    <li>• Emissão de pareceres jurídicos</li>
                    <li>• Orientação preventiva e estratégica</li>
                    <li>• Condução de mediação extrajudicial</li>
                    <li>• Negociação e formalização de acordos</li>
                    <li>• Apoio jurídico na tomada de decisões</li>
                </ul>

            </section>

        </main>
    );
}