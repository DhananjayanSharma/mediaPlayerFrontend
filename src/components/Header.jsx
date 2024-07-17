import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {faVideo} from '@fortawesome/free-solid-svg-icons'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function Header() {
  return (
    <Navbar className="bg-dark p-3">
        <Container>
          <Navbar.Brand href="#home">
         <h4 className='text-warning'> <FontAwesomeIcon icon={faVideo} beat className='me-3'/>
            MediaPlayer
            </h4>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header
