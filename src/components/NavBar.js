import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Navbar, NavbarBrand, NavLink } from "reactstrap"
import { UserContext } from "../contexts/userContext"

export default function NavBar() {
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
          <NavLink className="text-white">current user: {username}</NavLink>
        </Navbar>
      </div>
    </div>
  )
}
