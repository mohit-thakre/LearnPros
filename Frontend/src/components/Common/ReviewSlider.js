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
            <div className="categorysec1 flex h-52 flex-col items-center justify-center rounded-lg bg-richblack-800 p-4 text-xl font-bold text-white">
              {/* User Image */}
              <img
                src={`https://api.dicebear.com/5.x/initials/svg?seed=${item.user.firstName} ${item.user.lastName}`}
                alt={`${item.user.firstName} ${item.user.lastName}`}
                className="mb-3 h-12 w-12 rounded-full object-cover"
              />

              {/* Reviewer Name */}
              <div className="text-lg font-semibold">{`${item.user.firstName} ${item.user.lastName}`}</div>

              {/* Course Name */}
              <div className="mb-1 text-sm font-medium text-richblack-500">
                {item.course.courseName}
              </div>

              {/* Review Text */}
              <div className="mb-3 text-center text-sm font-normal">
                {item.review}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-yellow-100">
                  {item.rating.toFixed(1)}
                </h3>
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

{
  /*import React, { useEffect, useState } from "react"

import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


import { apiConnector } from "../../services/apiConnector"
import { ratingsEndpoints } from "../../services/apis"

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

  // const faveData = [
  //   { id: 1, title: "Favorite 1", description: "This is favorite item 1" },
  //   { id: 2, title: "Favorite 2", description: "This is favorite item 2" },
  //   { id: 3, title: "Favorite 3", description: "This is favorite item 3" },
  //   { id: 4, title: "Favorite 4", description: "This is favorite item 4" },
  //   { id: 5, title: "Favorite 5", description: "This is favorite item 5" },
  //   { id: 6, title: "Favorite 3", description: "This is favorite item 3" },
  //   { id: 7, title: "Favorite 4", description: "This is favorite item 4" },
  //   { id: 8, title: "Favorite 5", description: "This is favorite item 5" },
  // ];

  const [review, setReviews] = useState([])
  const truncateWords = 15

  useEffect(() => {
    ;(async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      )
      if (data?.success) {
        setReviews(data?.data)
      }
    })()
  }, [])

  return (
    <div className=" container mx-auto bg-gradient-to-r from-richblack-900  via-caribbeangreen-800 to-richblack-900  px-9 py-3">
      <Slider {...settings}>
        {review.map((item) => (
          <div
            key={item._id}
            className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25"
          >
            <div className="flex items-center gap-4">
              <img
                src={
                  review?.user?.image
                    ? review?.user?.image
                    : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                }
                alt=""
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                <h2 className="text-[12px] font-medium text-richblack-500">
                  {review?.course?.courseName}
                </h2>
              </div>
            </div>
            <p className="font-medium text-richblack-25">
              {review?.review.split(" ").length > truncateWords
                ? `${review?.review
                    .split(" ")
                    .slice(0, truncateWords)
                    .join(" ")} ...`
                : `${review?.review}`}
            </p>
            <div className="flex items-center gap-2 ">
              <h3 className="font-semibold text-yellow-100">
                {review.rating.toFixed(1)}
              </h3>
              <ReactStars
                count={5}
                value={review.rating}
                size={20}
                edit={false}
                activeColor="#ffd700"
                emptyIcon={<FaStar />}
                fullIcon={<FaStar />}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ReviewSlider
*/
}
