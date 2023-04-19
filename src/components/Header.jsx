import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faMagnifyingGlass, faRightFromBracket, faStar } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Header = () => {
  return (
    <div>
       <Navbar className='' bg="dark" variant="dark" id='navbar'>
        <Container>
        <Navbar.Brand id='brand'>Мармеладия</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav>          
          <Form className="d-flex">
            <Form.Control
              id='search'
              type="search"
              placeholder="Поиск"
              aria-label="Search"
            />
            <Button id='searchButton' className='mx-2' variant="warning"><FontAwesomeIcon id='searchIcon' icon={faMagnifyingGlass} /></Button>
            <Button id='favButton' className='mx-2' variant="warning"><FontAwesomeIcon id='favIcon' icon={faStar} /></Button>
            <Button id='orderButton' className='mx-2' variant="warning"><FontAwesomeIcon id='orderIcon' icon={faCubes} /></Button>
            <Button id='logoutButton' className='mx-2' variant="danger"><FontAwesomeIcon id='logoutIcon' icon={faRightFromBracket} /></Button>
          </Form>
        </Nav>
      </Container>
    </Navbar>
    </div>
  )
}
export default Header