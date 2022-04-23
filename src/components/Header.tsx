import React from 'react'
import { IoMdLogIn } from 'react-icons/io'
import { colors } from '../constants/Theme'


interface HeaderPropsInterface {
  title: string,
  backgroundColor: string
}

interface Route {
  label: string,
  source: string
}

const Header = (props: HeaderPropsInterface) => {

  const routes: Array<Route> = [{label: "Главная", source: 'Main'}, {label: "SAUMET", source: 'Saumet'}, {label: 'Магазин', source: 'Store'}, {label: "Маркетинг-план", source: 'marketing'}, {label: "Контакты", source: 'Contacts'}]

  return (
    <header>
      <nav className='nav-container'>
        <a href="">
          <img src={require('../images/icons/logo.svg')} alt="" className='logo'/>
        </a>
        <ul className='nav-list'>
          {
            routes.map((route, index) => {
              return(
                <Nav name={route.label} onClick={() => console.log('Route: ' , route.source)} key={index}/>
              )
            })
          }
        </ul>
        <button className='login-button' style={{borderColor: colors.first}}><IoMdLogIn style={{width: 18, height :18, marginRight: 8}}/> Войти</button>
      </nav>
    </header>
  )
}

interface NavPropsInterface {
  name: string,
  onClick: React.MouseEventHandler
}

const Nav = (props: NavPropsInterface) => {
  return (
    <li><button onClick={props.onClick} className='nav-button' type='button' style={{color: colors.font}}>{props.name}</button></li>
  )
}

export default Header