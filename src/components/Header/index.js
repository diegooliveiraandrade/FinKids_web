import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'

function ClearStorage() {
  localStorage.removeItem('id')
  localStorage.removeItem('name')
  localStorage.removeItem('email')
}

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <Link to='/home'>< img src={logo} alt="Logo" /> </Link>
      </S.LeftSide>
      <S.RightSide>
        <Link to="/add">CADASTRAR GASTO</Link>
        <span className="divisor" />
        <Link to="/listar">LISTAR</Link>
        <span className="divisor" />
        <Link to="/desejos">MEUS DESEJOS</Link>
        <span className="divisor" />
        <Link to='/' onClick={ClearStorage}>SAIR</Link>
      </S.RightSide>
    </S.Container>

  )
}

export default Header;
