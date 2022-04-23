import React from 'react'

interface PropsInterface {
    name: string,
    onClick: React.MouseEventHandler
}

const Nav = (props: PropsInterface) => {
  return (
    <li><a onClick={props.onClick}>{props.name}</a></li>
  )
}

export default Nav