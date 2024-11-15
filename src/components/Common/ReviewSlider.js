import React from "react"
import { FaStar } from "react-icons/fa"
import ReactStars from "react-rating-stars-component"
import Slider from "react-slick"

import { faveData } from "../../data/faveData"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className=" container mx-auto bg-gradient-to-r from-richblack-900  via-caribbeangreen-800 to-richblack-900  px-9 py-3">
      <Slider {...settings}>
        {faveData.map((item) => (
          <div key={item.id} className="p-4">
            <div className="flex h-full flex-col items-center justify-center rounded-lg bg-richblack-800 p-4 text-white shadow-md">
              {/* User Image */}
              <img
                src={`https://api.dicebear.com/5.x/initials/svg?seed=${item.user.firstName} ${item.user.lastName}`}
                alt={`${item.user.firstName} ${item.user.lastName}`}
                className="mb-3 h-12 w-12 rounded-full object-cover sm:h-16 sm:w-16"
              />

              {/* Reviewer Name */}
              <div className="text-center text-lg font-semibold sm:text-xl">
                {`${item.user.firstName} ${item.user.lastName}`}
              </div>

              {/* Course Name */}
              <div className="mb-1 text-center text-sm font-medium text-richblack-500 sm:text-base">
                {item.course.courseName}
              </div>

              {/* Review Text */}
              <div className="mb-3 text-center text-xs font-normal sm:text-sm">
                {item.review}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 text-yellow-100">
                <h3 className="font-semibold">{item.rating.toFixed(1)}</h3>
                <ReactStars
                  count={5}
                  value={item.rating}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<FaStar />}
                  fullIcon={<FaStar />}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ReviewSlider
