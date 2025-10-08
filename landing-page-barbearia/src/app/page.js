'use client'
import { useState } from "react";
import Image from "next/image";
import { BsSun, BsMoon } from "react-icons/bs";
import Logo from "/public/barbearia.png";
import estilos from "./page.module.css";

export default function Home() {
  const [alterarTema, setAlterarTema] = useState(false);

  function trocarTemaPagina() {
    setAlterarTema(!alterarTema);
  }


  return (
    <div className={alterarTema ? estilos.escuro : estilos.claro}>
      <header className={estilos.container_topo}>
        <div className={estilos.topo}>
          <Image src={Logo} className={estilos.img} />
          <button onClick={trocarTemaPagina}> {alterarTema ? <BsSun /> : <BsMoon />}</button>
        </div>
      </header>

      <section className={estilos.banner}>
      </section>

      <section className={estilos.secao_conteudo}>
        <main className={estilos.container_conteudo}>
          <h1>Bem-vindo a Barber Shop</h1>

          <p className={estilos.paragrafo}> Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas</p>

          <p className={estilos.paragrafo}> Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>

            <p className={estilos.fonte_assinatura}>
              S. Gabriel
            </p>
        </main>

      </section>

    </div>
  );
}
