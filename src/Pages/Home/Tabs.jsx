import React from "react";
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
        <Grid item xs={12} sm={0.75} md={1.5}></Grid>
        {XboxData.map((items) => (
          <Grid item xs={12} sm={3.5} md={3}>
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
        <Grid item xs={12} sm={0.75} md={1.5}></Grid>
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
        <Grid itemxs={12} sm={0.75} md={1.5}></Grid>
        {HeadPhones.map((items) => (
          <Grid item xs={12} sm={3.5} md={3}>
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
        <Grid item xs={12} sm={0.75} md={1.5}></Grid>
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
        <Grid item xs={12} sm={0.75} md={1.5}></Grid>
        {Playstation.map((items) => (
          <Grid item xs={12} sm={3.5} md={3}>
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
        <Grid item xs={12} sm={0.75} md={1.5}></Grid>
      </Grid>
    </>
  );
};

export const TrustUsData = () => {};
