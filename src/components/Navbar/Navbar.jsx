import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid m-3">
    <a className="navbar-brand text-light fw-bold fs-4 " href="Home">Start FrameWork</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse mr-0" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link text-light" aria-current="page" to={"about"}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" aria-current="page" to={"portfolio"}>Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" aria-current="page" to={"contact"}>Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
