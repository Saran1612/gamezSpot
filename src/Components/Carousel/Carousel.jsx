import React from "react";
import Carousel from "react-multi-carousel";
import ReusableButton from "../Button/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Joystick from "../../assests/joystick.svg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeBanner from "../../assests/homeBanner.svg";
import "./Carousel.css";
import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { Handshake } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

export const PreOrder = (props) => {
  const { setData } = props;

  const [selectedProducts, setSelectedProducts] = useState([]);

  const featuredProducts = [
    {
      id: 3001,
      img: Joystick,
      name: "Electrobot Xtreme Gaming One",
      price: "130.00",
      star: "4.5",
    },
    {
      id: 3002,
      img: Joystick,
      name: "Electrobot Xtreme Gaming Two",
      price: "150.00",
      star: "4",
    },
    {
      id: 3003,
      img: Joystick,
      name: "Electrobot Xtreme Gaming Three",
      price: "190.00",
      star: "4.7",
    },
    {
      id: 3004,
      img: Joystick,
      name: "Electrobot Xtreme Gaming Four",
      price: "70.00",
      star: "4.2",
    },
    {
      id: 3005,
      img: Joystick,
      name: "Electrobot Xtreme Gaming Five",
      price: "200.00",
      star: "4.6",
    },
    {
      id: 3006,
      img: Joystick,
      name: "Electrobot Xtreme Gaming Six",
      price: "170.00",
      star: "3.9",
    },
    {
      id: 3007,
      img: Joystick,
      name: "Electrobot Xtreme Gaming Seven",
      price: "110.00",
      star: "4",
    },
    {
      id: 3008,
      img: Joystick,
      name: "Electrobot Xtreme Gaming Eight",
      price: "90.00",
      star: "4.8",
    },
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
      breakpoint: { max: 900, min: 425 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  const arrayOne = [];

  const handlePreOrderCartClick = (product) => {
    const isProductInArrayOne = arrayOne.some((item) => item.id === product.id);

    if (!isProductInArrayOne) {
      arrayOne.push(product);
      setData(...arrayOne);
    }
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
      autoPlaySpeed={1000}
      infinite={true}
      customTransition="transform 1000ms ease-in-out"
      pauseOnHover={false}
      transitionDuration={1000}
      responsive={responsive}
      // className='slider_carousel'
    >
      {featuredProducts.map((items) => (
        <div className="card-div-home-new-product-featured" key={items.id}>
          <Card className="card" sx={{ margin: "10px" }}>
            <CardActionArea className="cardActionArea">
              <Link
                to="/home/singleProducts"
                style={{ textDecoration: "none" }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <span className="product_text">Electrobot Xtreme Gaming</span>
                  <span className="product_descrp-text">TYPE: Electrobot </span>
                </Box>
                <CardMedia
                  component="img"
                  className="card-img-featured"
                  height="160"
                  image={items.img}
                  alt={items.name}
                />
              </Link>
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
                  <span className="price_text">{items.price}</span>
                  <FavoriteIcon sx={{ color: "#FF003A" }} />
                  <ReusableButton
                    buttonName="Add to Cart"
                    size="small"
                    className="addToCart_button"
                    onClick={() => handlePreOrderCartClick(items)}
                  />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export const HotOnSale = (props) => {
  const { setData } = props;

  const featuredProducts = [
    {
      id: 2001,
      img: Joystick,
      name: "Brilliance Bead",
      price: "130.00",
      star: "4.5",
    },
    {
      id: 2002,
      img: Joystick,
      name: "Bulova Jewelry",
      price: "150.00",
      star: "4",
    },
    {
      id: 2003,
      img: Joystick,
      name: "Cultured Pearl",
      price: "190.00",
      star: "4.7",
    },
    {
      id: 2004,
      img: Joystick,
      name: "Gemstone Ring",
      price: "70.00",
      star: "4.2",
    },
    {
      id: 2005,
      img: Joystick,
      name: "Diamond Oval",
      price: "200.00",
      star: "4.6",
    },
    {
      id: 2006,
      img: Joystick,
      name: "Diamond Octagonal",
      price: "170.00",
      star: "3.9",
    },
    {
      id: 2007,
      img: Joystick,
      name: "Enchanted Disney",
      price: "110.00",
      star: "4",
    },
    {
      id: 2008,
      img: Joystick,
      name: "Platinum Oval",
      price: "90.00",
      star: "4.8",
    },
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
      breakpoint: { max: 900, min: 425 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  const arrayOne = [];

  const handleHotSaleCartClick = (product) => {
    const isProductInArrayOne = arrayOne.some((item) => item.id === product.id);

    if (!isProductInArrayOne) {
      arrayOne.push(product);
      setData(...arrayOne);
    }
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
      autoPlaySpeed={3000}
      infinite={true}
      customTransition="transform 1000ms ease-in-out"
      pauseOnHover={false}
      transitionDuration={1000}
      responsive={responsive}
      // className='slider_carousel'
    >
      {featuredProducts.map((items) => (
        <div className="card-div-home-new-product-featured" key={items.id}>
          <Card className="card" sx={{ margin: "10px" }}>
            <CardActionArea className="cardActionArea">
              <Link
                to="/home/singleProducts"
                style={{ textDecoration: "none" }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <span className="product_text" style={{ textAlign: "start" }}>
                    {items.name}
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
              </Link>
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
                  <span className="price_text">{items.price}</span>
                  <FavoriteIcon sx={{ color: "#FF003A" }} />
                  <ReusableButton
                    buttonName="Add to Cart"
                    size="small"
                    className="addToCart_button"
                    onClick={() => handleHotSaleCartClick(items)}
                  />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export const ComingSoon = (props) => {
  const { setData } = props;

  const featuredProducts = [
    {
      id: 1001,
      img: Joystick,
      name: "Coming Soon",
      price: "130.00",
      star: "4.5",
    },
    {
      id: 1002,
      img: Joystick,
      name: "Bulova Jewelry",
      price: "150.00",
      star: "4",
    },
    {
      id: 1003,
      img: Joystick,
      name: "Cultured Pearl",
      price: "190.00",
      star: "4.7",
    },
    {
      id: 1004,
      img: Joystick,
      name: "Gemstone Ring",
      price: "70.00",
      star: "4.2",
    },
    {
      id: 1005,
      img: Joystick,
      name: "Diamond Oval",
      price: "200.00",
      star: "4.6",
    },
    {
      id: 1006,
      img: Joystick,
      name: "Diamond Octagonal",
      price: "170",
      star: "3.9",
    },
    {
      id: 1007,
      img: Joystick,
      name: "Enchanted Disney",
      price: "110.00",
      star: "4",
    },
    {
      id: 1008,
      img: Joystick,
      name: "Platinum Oval",
      price: "90.00",
      star: "4.8",
    },
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
      breakpoint: { max: 900, min: 425 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  const arrayOne = [];

  const handleComingSoonCartClick = (product) => {
    const isProductInArrayOne = arrayOne.some((item) => item.id === product.id);

    if (!isProductInArrayOne) {
      arrayOne.push(product);
      setData(...arrayOne);
    }
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
      autoPlaySpeed={6000}
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
                  <span className="product_text" style={{ textAlign: "start" }}>
                    {items.name}
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
                    <span className="price_text">{items.price}</span>
                    <FavoriteIcon sx={{ color: "#FF003A" }} />
                    <ReusableButton
                      buttonName="Add to Cart"
                      size="small"
                      className="addToCart_button"
                      onClick={() => handleComingSoonCartClick(items)}
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

export const HomeBannerCarousel = (props) => {
  const { setData } = props;
  const navigate = useNavigate();

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
      autoPlaySpeed={6000}
      infinite={true}
      customTransition="transform 1000ms ease-in-out"
      pauseOnHover={false}
      transitionDuration={1000}
      responsive={responsive}
      className="slider_carousel"
    >
      <div
        id="carouselExampleCaptions"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ margin: "15px" }}
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid item xs={0} sm={0} md={1.5}></Grid>

              <Grid item xs={12} sm={6} md={5}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "",
                    flexDirection: "column",
                    padding: "35px 0px",
                  }}
                >
                  <span className="home-heading_text">
                    Best <b className="home-heading_redtext">Pro Gaming</b>
                  </span>
                  <span className="home-heading_text">Accessories</span>
                  <span className="home-description_text">
                    Gaming accessories include gear such as headsets, extra
                    controllers, charging station, memory devices, carrying
                    cases and much more.
                  </span>

                  <Box
                    className="home-button_container"
                    sx={{ display: "flex", marginTop: "15px" }}
                  >
                    <ReusableButton
                      buttonName="Show product"
                      size="small"
                      className="show-product_button"
                      onClick={() => navigate("/home/products")}
                    />
                    <ReusableButton
                      buttonName="Show controllers"
                      size="small"
                      className="show-controller_button"
                    />
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4.5} md={4.5}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                  }}
                >
                  <img
                    src={HomeBanner}
                    alt="HomeBanner"
                    width="300"
                    height="300"
                  />
                </Box>
              </Grid>

              <Grid item xs={0} sm={0} md={1}></Grid>
            </Grid>
          </div>

          <div class="carousel-item">
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid item xs={0} sm={0} md={1.5}></Grid>

              <Grid item xs={12} sm={6} md={5}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "",
                    flexDirection: "column",
                    padding: "35px 0px",
                  }}
                >
                  <span className="home-heading_text">
                    Best <b className="home-heading_redtext">Pro Gaming</b>
                  </span>
                  <span className="home-heading_text">Accessories</span>
                  <span className="home-description_text">
                    Gaming accessories include gear such as headsets, extra
                    controllers, charging station, memory devices, carrying
                    cases and much more.
                  </span>

                  <Box
                    className="home-button_container"
                    sx={{ display: "flex", marginTop: "15px" }}
                  >
                    <ReusableButton
                      buttonName="Show product"
                      size="small"
                      className="show-product_button"
                      onClick={() => navigate("/home/products")}
                    />
                    <ReusableButton
                      buttonName="Show controllers"
                      size="small"
                      className="show-controller_button"
                    />
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4.5} md={4.5}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                  }}
                >
                  <img
                    src={HomeBanner}
                    alt="HomeBanner"
                    width="300"
                    height="300"
                  />
                </Box>
              </Grid>

              <Grid item xs={0} sm={0} md={1}></Grid>
            </Grid>
          </div>

          <div class="carousel-item">
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid item xs={0} sm={0} md={1.5}></Grid>

              <Grid item xs={12} sm={6} md={5}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "",
                    flexDirection: "column",
                    padding: "35px 0px",
                  }}
                >
                  <span className="home-heading_text">
                    Best <b className="home-heading_redtext">Pro Gamings</b>
                  </span>
                  <span className="home-heading_text">Accessories</span>
                  <span className="home-description_text">
                    Gaming accessories include gear such as headsets, extra
                    controllers, charging station, memory devices, carrying
                    cases and much more.
                  </span>

                  <Box
                    className="home-button_container"
                    sx={{ display: "flex", marginTop: "15px" }}
                  >
                    <ReusableButton
                      buttonName="Show product"
                      size="small"
                      className="show-product_button"
                      onClick={() => navigate("/home/products")}
                    />
                    <ReusableButton
                      buttonName="Show controllers"
                      size="small"
                      className="show-controller_button"
                    />
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4.5} md={4.5}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                  }}
                >
                  <img
                    src={HomeBanner}
                    alt="HomeBanner"
                    width="300"
                    height="300"
                  />
                </Box>
              </Grid>
              <Grid item xs={0} sm={0} md={1}></Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
