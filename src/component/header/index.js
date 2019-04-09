import React from 'react'
import './styles.scss'
import logo from '../../assets/logo.svg'

const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img src={logo} data-test="logoIMG" alt="logo" />
        </div>
      </div>
    </header>
  )
}

export default Header
