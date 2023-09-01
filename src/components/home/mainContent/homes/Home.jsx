import React from "react"
import Discover from "../../discover/Discover"
import Side from "../../sideContent/side/Side"
import Section from "../section/Section"
import "./style.css"

const Homes = () => {
  return (
    <>
      <main>
        <div className='container'>
          <section className='mainContent'>
            <Section />
          </section>
          <section className='sideContent'>
            <Side />
          </section>
        </div>
      </main>
    </>
  )
}

export default Homes
