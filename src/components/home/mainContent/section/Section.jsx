import React from "react"
import "./Section.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { section } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"

const Section = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 4,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  }
  return (
    <>
      <section className='section'>
        <Heading title='Section' />
        <div className='content'>
          <Slider {...settings}>
            {section.map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                  <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                    <div className='text row'>
                      <span class='category category2'>{val.category}</span>
                      <div className='comment'>
                        <i class='fas fa-comments'></i>
                        <label>some</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Section
