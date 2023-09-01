import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/politica'>Politica</Link>
              </li>
              <li>
                <Link to='/economia'>Economia</Link>
              </li>
              <li>
                <Link to='/policiales'>Policiales</Link>
              </li>
              <li>
                <Link to='/deportes'>Deportes</Link>
              </li>
              <li>
                <Link to='/sociedad'>Sociedad</Link>
              </li>
              <li>
                <Link to='/mundo'>Mundo</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
