import React from "react"
import { Link } from "react-router-dom"

import backArrowIcon from "../../assets/images/icons/back.svg"
import logoImg from "../../assets/images/logo.svg"

import "./styles.scss"

interface PageHeaderProps {
  title: string
  description?: string
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
  return (
    <header>
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backArrowIcon} alt="Icone voltar" />
          </Link>
          <img src={logoImg} alt="Icone Logo" className="logo" />
        </div>

        <div className="header-content">
          <strong>{props.title}</strong>

          {props.description && <p>{props.description}</p>}

          {props.children}
        </div>
      </header>
    </header>
  )
}

export default PageHeader
