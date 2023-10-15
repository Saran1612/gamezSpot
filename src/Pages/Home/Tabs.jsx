import React from "react";
import Carousel from "react-multi-carousel";
import ReusableButton from "../../Components/Button/Button";
import Joystick from "../../assests/joystick.svg";
import HeadphoneImg from "../../assests/headphones.svg";
import "./Tabs.css";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

import ReviewOne from "../../assests/Ellipse 13.png";
import ReviewTwo from "../../assests/Ellipse 20.png";
import ReviewThree from "../../assests/Ellipse 21.png";

export const Xbox = () => {
  const XboxData = [
    {
      id: 1,
      img: Joystick,
      name: "Brilliance Bead",
      price: "130",
      star: "4.5",
    },
    { id: 2, img: Joystick, name: "Bulova Jewelry", price: "150", star: "4" },
    { id: 3, img: Joystick, name: "Cultured Pearl", price: "190", star: "4.7" },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={0} md={1.5}></Grid>
        {XboxData.map((items) => (
          <Grid item xs={12} sm={4} md={3}>
            <div className="card-div-home-new-product-featured" key={items.id}>
              <Link to="#" style={{ textDecoration: "none" }}>
                <Card className="card">
                  <CardActionArea className="cardActionArea">
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span className="product_text">
                        Electrobot Xtreme Gaming Electrobot Xtreme Gaming
                      </span>
                      <span className="product_descrp-text">
                        TYPE: Electrobot{" "}
                      </span>
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
          </Grid>
        ))}
        <Grid item xs={12} sm={0} md={1.5}></Grid>
      </Grid>
    </>
  );
};

export const Headphones = () => {
  const HeadPhones = [
    {
      id: 1,
      img: HeadphoneImg,
      name: "Gemstone Ring",
      price: "70",
      star: "4.2",
    },
    {
      id: 2,
      img: HeadphoneImg,
      name: "Diamond Oval",
      price: "200",
      star: "4.6",
    },
    {
      id: 3,
      img: HeadphoneImg,
      name: "Diamond Octagonal",
      price: "170",
      star: "3.9",
    },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid itemxs={12} sm={0} md={1.5}></Grid>
        {HeadPhones.map((items) => (
          <Grid item xs={12} sm={4} md={3}>
            <div className="card-div-home-new-product-featured" key={items.id}>
              <Link to="#" style={{ textDecoration: "none" }}>
                <Card className="card">
                  <CardActionArea className="cardActionArea">
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span className="product_text">
                        Electrobot Xtreme Gaming Electrobot Xtreme Gaming
                      </span>
                      <span className="product_descrp-text">
                        TYPE: Electrobot{" "}
                      </span>
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
          </Grid>
        ))}
        <Grid item xs={12} sm={0} md={1.5}></Grid>
      </Grid>
    </>
  );
};

export const PlayStation = () => {
  const Playstation = [
    { id: 1, img: Joystick, name: "Enchanted Disney", price: "110", star: "4" },
    { id: 2, img: Joystick, name: "Platinum Oval", price: "90", star: "4.8" },
    { id: 3, img: Joystick, name: "Gemstone Ring", price: "70", star: "4.2" },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={0} md={1.5}></Grid>
        {Playstation.map((items) => (
          <Grid item xs={12} sm={4} md={3}>
            <div className="card-div-home-new-product-featured" key={items.id}>
              <Link to="#" style={{ textDecoration: "none" }}>
                <Card className="card">
                  <CardActionArea className="cardActionArea">
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span className="product_text">
                        Electrobot Xtreme Gaming Electrobot Xtreme Gaming
                      </span>
                      <span className="product_descrp-text">
                        TYPE: Electrobot{" "}
                      </span>
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
          </Grid>
        ))}
        <Grid item xs={12} sm={0} md={1.5}></Grid>
      </Grid>
    </>
  );
};

export const TrustUsData = () => {
  const newProducts = [
    {
      id: 1,
      img: ReviewOne,
      name: "Alexander Walt",
      role: "GAMER",
      description:
        "Joining my local gym was the best decision I made for my health and fitness. The trainers were knowledgeable and supportive, guiding me through personalized workout",
    },
    {
      id: 2,
      img: ReviewTwo,
      name: "Dharmasena Finch",
      role: "GAMER",
      description:
        "Joining my local gym was the best decision I made for my health and fitness. The trainers were knowledgeable and supportive, guiding me through personalized workout",
    },
    {
      id: 3,
      img: ReviewThree,
      name: "Muhammed Aslam",
      role: "GAMER",
      description:
        "Joining my local gym was the best decision I made for my health and fitness. The trainers were knowledgeable and supportive, guiding me through personalized workout",
    },
    {
      id: 4,
      img: ReviewTwo,
      name: "Walt",
      role: "GAMER",
      description:
        "Joining my local gym was the best decision I made for my health and fitness. The trainers were knowledgeable and supportive, guiding me through personalized workout",
    },
    {
      id: 5,
      img: ReviewThree,
      name: "iessm",
      role: "GAMER",
      description:
        "Joining my local gym was the best decision I made for my health and fitness. The trainers were knowledgeable and supportive, guiding me through personalized workout",
    },
    {
      id: 6,
      img: ReviewOne,
      name: "Psfdsgdgd",
      role: "GAMER",
      description:
        "Joining my local gym was the best decision I made for my health and fitness. The trainers were knowledgeable and supportive, guiding me through personalized workout",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
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
      arrows={false}
      showDots={false}
      shouldResetAutoplay
      slidesToSlide={1}
      autoPlay
      // customLeftArrow={<ChevronLeftIcon />}
      // customRightArrow={<ChevronRightIcon />}
      autoPlaySpeed={3000}
      infinite={true}
      customTransition="transform 1000ms ease-in-out"
      pauseOnHover={false}
      transitionDuration={10000}
      responsive={responsive}
      // className='slider_carousel'
    >
      {newProducts.map((items) => (
        // <Link
        //   to="#"
        //   style={{ textDecoration: "none", margin: "12px" }}
        //   key={items.id}
        // >
        <Card sx={{ maxWidth: { xs: 400, md: 300 } }} className="trust_card">
          <CardActionArea>
            <CardMedia
              component="img"
              className=""
              sx={{ width: "initial", margin: "auto", padding: "8px" }}
              height="100"
              image={items.img}
              alt={items.name}
            />
            <CardContent className="card_content">
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <span className="trustUs_text">{items.name}</span>
                <span className="trustUs-role_text">{items.role}</span>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "14px",
                  alignItems: "center",
                }}
              >
                <span className="trustUs-descp_text">{items.description}</span>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
        // </Link>
      ))}
    </Carousel>
  );
};
