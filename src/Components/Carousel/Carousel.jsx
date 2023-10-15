import React from "react";
import Carousel from "react-multi-carousel";
import ReusableButton from "../Button/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Joystick from "../../assests/joystick.svg";
import "./Carousel.css";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

export const PreOrder = () => {
  const featuredProducts = [
    {
      id: 1,
      img: Joystick,
      name: "Brilliance Bead",
      price: "130",
      star: "4.5",
    },
    { id: 2, img: Joystick, name: "Bulova Jewelry", price: "150", star: "4" },
    { id: 3, img: Joystick, name: "Cultured Pearl", price: "190", star: "4.7" },
    { id: 4, img: Joystick, name: "Gemstone Ring", price: "70", star: "4.2" },
    { id: 5, img: Joystick, name: "Diamond Oval", price: "200", star: "4.6" },
    {
      id: 6,
      img: Joystick,
      name: "Diamond Octagonal",
      price: "170",
      star: "3.9",
    },
    { id: 7, img: Joystick, name: "Enchanted Disney", price: "110", star: "4" },
    { id: 8, img: Joystick, name: "Platinum Oval", price: "90", star: "4.8" },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 4,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      additionalTransfrom={0}
      // arrows
      shouldResetAutoplay
      slidesToSlide={1}
      autoPlay
      customLeftArrow={<ChevronLeftIcon />}
      customRightArrow={<ChevronRightIcon />}
      autoPlaySpeed={10000000}
      infinite={true}
      customTransition="transform 1000ms ease-in-out"
      pauseOnHover={false}
      transitionDuration={1000}
      responsive={responsive}
      // className='slider_carousel'
    >
      {featuredProducts.map((items) => (
        <div className="card-div-home-new-product-featured" key={items.id}>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Card className="card" sx={{ margin: "10px" }}>
              <CardActionArea className="cardActionArea">
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <span className="product_text">
                    Electrobot Xtreme Gaming Electrobot Xtreme Gaming
                  </span>
                  <span className="product_descrp-text">TYPE: Electrobot </span>
                </Box>
                <CardMedia
                  component="img"
                  className="card-img-featured"
                  height="160"
                  image={items.img}
                  alt={items.name}
                />
                <CardContent className="card_content">
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "5px",
                      alignItems: "center",
                    }}
                  >
                    <span className="price_text">468.00</span>
                    <ReusableButton
                      buttonName="Add to Cart"
                      size="small"
                      className="addToCart_button"
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export const HotOnSale = () => {
  const featuredProducts = [
    {
      id: 1,
      img: Joystick,
      name: "Brilliance Bead",
      price: "130",
      star: "4.5",
    },
    { id: 2, img: Joystick, name: "Bulova Jewelry", price: "150", star: "4" },
    { id: 3, img: Joystick, name: "Cultured Pearl", price: "190", star: "4.7" },
    { id: 4, img: Joystick, name: "Gemstone Ring", price: "70", star: "4.2" },
    { id: 5, img: Joystick, name: "Diamond Oval", price: "200", star: "4.6" },
    {
      id: 6,
      img: Joystick,
      name: "Diamond Octagonal",
      price: "170",
      star: "3.9",
    },
    { id: 7, img: Joystick, name: "Enchanted Disney", price: "110", star: "4" },
    { id: 8, img: Joystick, name: "Platinum Oval", price: "90", star: "4.8" },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 4,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      additionalTransfrom={0}
      // arrows
      shouldResetAutoplay
      slidesToSlide={1}
      autoPlay
      customLeftArrow={<ChevronLeftIcon />}
      customRightArrow={<ChevronRightIcon />}
      autoPlaySpeed={10000000}
      infinite={true}
      customTransition="transform 1000ms ease-in-out"
      pauseOnHover={false}
      transitionDuration={1000}
      responsive={responsive}
      // className='slider_carousel'
    >
      {featuredProducts.map((items) => (
        <div className="card-div-home-new-product-featured" key={items.id}>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Card className="card" sx={{ margin: "10px" }}>
              <CardActionArea className="cardActionArea">
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <span className="product_text">
                    Electrobot Xtreme Gaming Electrobot Xtreme Gaming
                  </span>
                  <span className="product_descrp-text">TYPE: Electrobot </span>
                </Box>
                <CardMedia
                  component="img"
                  className="card-img-featured"
                  height="160"
                  image={items.img}
                  alt={items.name}
                />
                <CardContent className="card_content">
                  {/* <Box sx={{ width: "100%" }}>
                      <span className="product_text">{items.name}</span>
                    </Box> */}
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "5px",
                      alignItems: "center",
                    }}
                  >
                    <span className="price_text">468.00</span>
                    <ReusableButton
                      buttonName="Add to Cart"
                      size="small"
                      className="addToCart_button"
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export const ComingSoon = () => {
  const featuredProducts = [
    {
      id: 1,
      img: Joystick,
      name: "Brilliance Bead",
      price: "130",
      star: "4.5",
    },
    { id: 2, img: Joystick, name: "Bulova Jewelry", price: "150", star: "4" },
    { id: 3, img: Joystick, name: "Cultured Pearl", price: "190", star: "4.7" },
    { id: 4, img: Joystick, name: "Gemstone Ring", price: "70", star: "4.2" },
    { id: 5, img: Joystick, name: "Diamond Oval", price: "200", star: "4.6" },
    {
      id: 6,
      img: Joystick,
      name: "Diamond Octagonal",
      price: "170",
      star: "3.9",
    },
    { id: 7, img: Joystick, name: "Enchanted Disney", price: "110", star: "4" },
    { id: 8, img: Joystick, name: "Platinum Oval", price: "90", star: "4.8" },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 4,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      additionalTransfrom={0}
      // arrows
      shouldResetAutoplay
      slidesToSlide={1}
      autoPlay
      customLeftArrow={<ChevronLeftIcon />}
      customRightArrow={<ChevronRightIcon />}
      autoPlaySpeed={10000000}
      infinite={true}
      customTransition="transform 1000ms ease-in-out"
      pauseOnHover={false}
      transitionDuration={1000}
      responsive={responsive}
      // className='slider_carousel'
    >
      {featuredProducts.map((items) => (
        <div className="card-div-home-new-product-featured" key={items.id}>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Card className="card" sx={{ margin: "10px" }}>
              <CardActionArea className="cardActionArea">
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <span className="product_text">
                    Electrobot Xtreme Gaming Electrobot Xtreme Gaming
                  </span>
                  <span className="product_descrp-text">TYPE: Electrobot </span>
                </Box>
                <CardMedia
                  component="img"
                  className="card-img-featured"
                  height="160"
                  image={items.img}
                  alt={items.name}
                />
                <CardContent className="card_content">
                  {/* <Box sx={{ width: "100%" }}>
                      <span className="product_text">{items.name}</span>
                    </Box> */}
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "5px",
                      alignItems: "center",
                    }}
                  >
                    <span className="price_text">468.00</span>
                    <ReusableButton
                      buttonName="Add to Cart"
                      size="small"
                      className="addToCart_button"
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};
