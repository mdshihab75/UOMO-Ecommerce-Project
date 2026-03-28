import React from 'react'
import Images from '../Common/Images'
import Container from '../ui/Container'
import { navitems } from '../../Api/NavbarData'

const Header = () => {
  return (
    <>
    <header>
      <nav>
        <Container>
          <Images src ="Images/logo.png" alt ="logo"/>
          <ul>
            {
              navitems?.map((items, index) => (
                <li key={items.Id}>{items.Name}</li>
              ))
            }
          </ul>
        </Container>        
      </nav>
    </header>
    </>
  )
}

export default Header