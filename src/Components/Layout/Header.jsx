import React from 'react'
import Images from '../Common/Images'
import Container from '../ui/Container'

const Header = () => {
  return (
    <>
    <header>
      <nav>
        <Container>
          <Images src ="Images/logo.png" alt ="logo"/>
        </Container>        
      </nav>
    </header>
    </>
  )
}

export default Header