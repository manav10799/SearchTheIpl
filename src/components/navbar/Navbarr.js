import React from 'react'
import './Navbarr.css'
import { Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useHistory } from 'react-router-dom' 


function Navbarr() {

  const history = useHistory()

  function handleSearch({
    which: charCode,
    target: {
      value: value = ''
    }
  }) {
    value = value.trim()
    if (value === '') {
      return history.push('/')
    }
    // if (charCode == 13) {
    history.push(`/search/${value}`)
    // }
  }

  function handleTeams() {


    history.push(`/teams`)
  }

  function handleHome() {
    history.push(`/`)
  }
    return (
     
  
           <div>
    <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark">
 <Navbar.Brand href="#home" onClick={handleHome}><img src="https://i.ibb.co/xj65R2P/content-item-bg-small.png" width="150px" height="80px"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#teams" onClick={handleTeams}>Teams</Nav.Link>
      <NavDropdown title="Other" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Owners</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Value</NavDropdown.Item>   
      </NavDropdown>
    </Nav>  
      <div className="container">
<Form role="search" method="get" className="search-form" action="" onSubmit={(e) => e.preventDefault()} >
	<label>

		<input className="search-field form-control" type="text" placeholder="Search Players" aria-label="Search" onKeyUp={handleSearch} />
	</label>
	<input type="submit" className="search-submit" value="Search" />
</Form>
</div>
  </Navbar.Collapse>
</Navbar>


     
        </div>
       
    )
}

export default Navbarr
