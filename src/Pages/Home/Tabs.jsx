import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import ReusableButton from "../../Components/Button/Button";
import Joystick from "../../assests/joystick.svg";
import HeadphoneImg from "../../assests/headphones.svg";
import "./Tabs.css";
import "react-multi-carousel/lib/styles.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
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

export const Xbox = (props) => {
  const { setData } = props;

  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: 9001,
      img: Joystick,
      name: "Brilliance Bead",
      price: "130.00",
      star: "4.5",
    },
    {
      id: 9002,
      img: Joystick,
      name: "Bulova Jewelry",
      price: "150.00",
      star: "4",
    },
    {
      id: 9003,
      img: Joystick,
      name: "Cultured Pearl",
      price: "190.00",
      star: "4.7",
    },
  ]);

  const arrayOne = [];

  const handleXboxCart = (product) => {
    const isProductInArrayOne = arrayOne.some((item) => item.id === product.id);

    if (!isProductInArrayOne) {
      arrayOne.push(product);
      setData(...arrayOne);

      const updatedProducts = featuredProducts.map((item) => {
        if (item.id === product.id && !item.inCart) {
          return { ...item, inCart: true };
        }
        return item;
      });
      setFeaturedProducts(updatedProducts);
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={0} md={1}></Grid>
        {featuredProducts.map((items) => (
          <Grid item xs={12} sm={6} md={3.5}>
            <div className="card-div-home-new-product-featured" key={items.id}>
              <Card className="card">
                <CardActionArea className="cardActionArea">
                  <Link
                    to="/home/singleProducts"
                    style={{ textDecoration: "none" }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span className="product_text">{items.name}</span>
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
                  </Link>
                  <CardContent className="card_content">
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "5px",
                        alignItems: "center",
                        "@media (min-width: 600px) and (max-width:650px)": {
                          flexDirection: "column",
                        },

                        "@media (min-width: 900px) and (max-width:1000px)": {
                          flexDirection: "column",
                        },
                      }}
                    >
                      <Box>
                        <span className="price_text">{items.price}</span>
                        <FavoriteIcon
                          sx={{ color: "#FF003A", marginLeft: "10px" }}
                        />
                      </Box>
                      <ReusableButton
                        buttonName={items.inCart ? "Added" : "Add to Cart"}
                        size="small"
                        className="addToCart_button"
                        startIcon={items.inCart ? <TaskAltIcon /> : null}
                        disabled={items.inCart}
                        onClick={() => handleXboxCart(items)}
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
        ))}
        <Grid item xs={12} sm={0} md={1}></Grid>
      </Grid>
    </>
  );
};

export const Headphones = (props) => {
  const { setData } = props;
  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: 1,
      img: HeadphoneImg,
      name: "Gemstone Ring",
      price: "70.00",
      star: "4.2",
    },
    {
      id: 2,
      img: HeadphoneImg,
      name: "Diamond Oval",
      price: "200.00",
      star: "4.6",
    },
    {
      id: 3,
      img: HeadphoneImg,
      name: "Diamond Octagonal",
      price: "170.00",
      star: "3.9",
    },
  ]);

  const arrayOne = [];

  const handleHeadPhonesCart = (product) => {
    const isProductInArrayOne = arrayOne.some((item) => item.id === product.id);

    if (!isProductInArrayOne) {
      arrayOne.push(product);
      setData(...arrayOne);

      const updatedProducts = featuredProducts.map((item) => {
        if (item.id === product.id && !item.inCart) {
          return { ...item, inCart: true };
        }
        return item;
      });
      setFeaturedProducts(updatedProducts);
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid itemxs={12} sm={0} md={1.5}></Grid>
        {featuredProducts.map((items) => (
          <Grid item xs={12} sm={4} md={3}>
            <div className="card-div-home-new-product-featured" key={items.id}>
              <Card className="card">
                <CardActionArea className="cardActionArea">
                  <Link
                    to="/home/singleProducts"
                    style={{ textDecoration: "none" }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span className="product_text">{items.name}</span>
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
                  </Link>
                  <CardContent className="card_content">
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "5px",
                        alignItems: "center",
                        "@media (min-width: 600px) and (max-width:650px)": {
                          flexDirection: "column",
                        },

                        "@media (min-width: 900px) and (max-width:1000px)": {
                          flexDirection: "column",
                        },
                      }}
                    >
                      <Box>
                        <span className="price_text">{items.price}</span>
                        <FavoriteIcon
                          sx={{ color: "#FF003A", marginLeft: "10px" }}
                        />
                      </Box>
                      <ReusableButton
                        buttonName={items.inCart ? "Added" : "Add to Cart"}
                        size="small"
                        className="addToCart_button"
                        startIcon={items.inCart ? <TaskAltIcon /> : null}
                        disabled={items.inCart}
                        onClick={() => handleHeadPhonesCart(items)}
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
        ))}
        <Grid item xs={12} sm={0} md={1.5}></Grid>
      </Grid>
    </>
  );
};

export const PlayStation = (props) => {
  const { setData } = props;
  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: 1,
      img: Joystick,
      name: "Enchanted Disney",
      price: "110.00",
      star: "4",
    },
    {
      id: 2,
      img: Joystick,
      name: "Platinum Oval",
      price: "90.00",
      star: "4.8",
    },
    {
      id: 3,
      img: Joystick,
      name: "Gemstone Ring",
      price: "70.00",
      star: "4.2",
    },
  ]);

  const arrayOne = [];

  const handlePsCart = (product) => {
    const isProductInArrayOne = arrayOne.some((item) => item.id === product.id);

    if (!isProductInArrayOne) {
      arrayOne.push(product);
      setData(...arrayOne);

      const updatedProducts = featuredProducts.map((item) => {
        if (item.id === product.id && !item.inCart) {
          return { ...item, inCart: true };
        }
        return item;
      });
      setFeaturedProducts(updatedProducts);
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={0} md={1.5}></Grid>
        {featuredProducts.map((items) => (
          <Grid item xs={12} sm={4} md={3}>
            <div className="card-div-home-new-product-featured" key={items.id}>
              <Card className="card">
                <CardActionArea className="cardActionArea">
                  <Link
                    to="/home/singleProducts"
                    style={{ textDecoration: "none" }}
                  >
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
                  </Link>
                  <CardContent className="card_content">
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "5px",
                        alignItems: "center",
                        "@media (min-width: 600px) and (max-width:650px)": {
                          flexDirection: "column",
                        },

                        "@media (min-width: 900px) and (max-width:1000px)": {
                          flexDirection: "column",
                        },
                      }}
                    >
                      <Box>
                        <span className="price_text">{items.price}</span>
                        <FavoriteIcon
                          sx={{ color: "#FF003A", marginLeft: "10px" }}
                        />
                      </Box>
                      <ReusableButton
                        buttonName={items.inCart ? "Added" : "Add to Cart"}
                        size="small"
                        className="addToCart_button"
                        startIcon={items.inCart ? <TaskAltIcon /> : null}
                        disabled={items.inCart}
                        onClick={() => handlePsCart(items)}
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
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
