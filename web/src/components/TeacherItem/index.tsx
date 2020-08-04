import React from "react"

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import "./styles.scss"

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/55714745?s=460&u=65d2f7a9eff8bf32aa735c1e956495212ecab25d&v=4"
          alt="Vinicius Savegnago"
        />

        <div>
          <strong>Vinicius Savegnago</strong>
          <span>Matemágica</span>
        </div>
      </header>

      <p className="teacher-about">Texto do professor, contando um pouco sobre a sua metodologia e etc...</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Icone Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
