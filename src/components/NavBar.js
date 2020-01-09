import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"
import {UserContext} from "../contexts/userContext"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

const username = useContext(UserContext)

  return (
    <div>
      <div className="nav-bar">
        <Navbar style={{ backgroundColor: "slategray" }} light expand="md">
          <Link to="/">
            <NavbarBrand className="text-white" href="/">
              Fish Friends
            </NavbarBrand>
          </Link>
          <NavLink className="text-white" href="/dashboard/">
            Home
          </NavLink>
          <p>current user:{username}</p>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown color="dark" nav inNavbar>
                <DropdownToggle className="text-white" nav caret>
                  Select Log
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Location Log</DropdownItem>
                  <DropdownItem>Fish Log</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                {/* <NavLink href="/dashboard/">Home</NavLink> */}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  )
}
