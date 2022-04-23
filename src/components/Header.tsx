import React from 'react'
import Nav from './header/Nav'

interface PropsInterface {
  title: string,
  backgroundColor: string
}

interface Route {
  label: string,
  source: string
}

const Header = (props: PropsInterface) => {

  const routes: Array<Route> = [{label: "Главная", source: 'App'}]

  return (
    <header>
      <a href="">
        <img src="../images/icons/logo.svg" alt="" />
      </a>
      <nav>
        <ul>
          {
            routes.map((route) => {
              return(
                <Nav name={route.label} onClick={() => console.log('Route: ' , route.source)}/>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header