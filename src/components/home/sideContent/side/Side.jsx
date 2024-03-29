import React from "react"
import "./side.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { gallery } from "../../../../dummyData"
import SocialMedia from "../social/SocialMedia"

//const allCat = [...new Set(popular.map((curEle) => curEle.category))]
//console.log(allCat)

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const category = ["Política", "Economía", "Policiales", "Deportes", "Sociedad", "Mundo"]
  return (
    <>
      <Heading title='Seguinos' />
      <SocialMedia />

      <Heading title='Subscribe' />

      <section className='subscribe'>
        <h1 className='title'>Subscribe to our New Stories</h1>
        <form action=''>
          <input type='email' placeholder='Email Address...' />
          <button>
            <i className='fa fa-paper-plane'></i> SUBMIT
          </button>
        </form>
      </section>

      <section className='banner'>
        <img src='./images/sidebar-banner-new.jpg' alt='' />
      </section>

      <section className='catgorys'>
        <Heading title='Categorías' />
        {/*<div className='items'>{allCat}</div>*/}
        {category.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>

    </>
  )
}

export default Side
