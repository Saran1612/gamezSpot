import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ReactStars from "react-rating-stars-component";
import { QuantityPicker } from "react-qty-picker";
import ReusableButton from "../../Components/Button/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import Insta from "../../assests/Group 1000002602.svg";
import Fb from "../../assests/Group 1000002601.svg";
import Twitter from "../../assests/Group 1000002714.svg";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import "./SingleProduct.css";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Description from "./Description";
import Review from "./Review";
import { Link } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Joystick from "../../assests/joystick.svg";
import Countdown from "react-countdown";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ProdOne from "../../assests/prodOne.png";
import prodTwo from "../../assests/prodTwo.png";

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
];

const images = [
  {
    original: ProdOne,
    thumbnail: ProdOne,
  },
  {
    original: ProdOne,
    thumbnail: ProdOne,
  },
  {
    original: ProdOne,
    thumbnail: ProdOne,
  },
  {
    original: ProdOne,
    thumbnail: ProdOne,
  },
  {
    original: ProdOne,
    thumbnail: ProdOne,
  },
];

const SingleProduct = () => {
  const [value, setValue] = useState("1");
  const [count, setCount] = useState("1");

  const [isFavorited, setIsFavorited] = useState(
    Array(featuredProducts.length).fill(false)
  );

  const toggleFavorite = (index) => {
    const updatedIsFavorited = [...isFavorited];
    updatedIsFavorited[index] = !updatedIsFavorited[index];
    console.log(updatedIsFavorited, "updatedIsFavorited");
    setIsFavorited(updatedIsFavorited);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleQuantityChange = (index, value) => {
    // const updatedClickedValue = [...clickedValue];
    // updatedClickedValue[index].quantity = value !== 0 ? value : 1;
    // setClickedValue(updatedClickedValue);
    // console.log(updatedClickedValue, "updatedClickedValue");
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="singleProd-sale_text">Sales Ended</span>;
    } else {
      return (
        <span className="singleProd-sale_text">
          {days}D : {hours}H : {minutes}M : {seconds}S
        </span>
      );
    }
  };

  return (
    <Box className="cart-bg_img">
      <Box>
        <Header />
      </Box>

      <Box
        sx={{
          padding: { xs: "15px 20px 10px 20px", md: "50px 100px 40px 80px" },
        }}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <ImageGallery
                  items={images}
                  lazyLoad={true}
                  showNav={false}
                  infinite={true}
                  showPlayButton={false}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <span className="singleProd-heading_text">
                  Redgear Cosmo Gaming Headset
                </span>
                <span className="singleProd-price_text">468.00</span>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ReactStars
                    className="stars"
                    count={5}
                    value={5}
                    size={24}
                    activeColor="#FCC246"
                  />
                  <span className="review-product_text">
                    (98 Customer reviews)
                  </span>
                </Box>

                <Divider sx={{ margin: "20px 0px", borderColor: "#9C9C9C" }} />

                <Box>
                  <span className="singleProd-desc_text">
                    HyperX Dual Chamber Drivers for more distinction and less
                    distortion. Signature Award-Winning HyperX comfort. Durable
                    aluminum frame with an expanded headband. Detachable braided
                    cable with....
                  </span>

                  <Box
                    sx={{
                      margin: "30px 0px",
                      border: "1px solid #FF003A",
                      padding: "14px 30px",
                      display: "flex",
                      justifyContent: "space-between",
                      borderRadius: "8px",
                    }}
                  >
                    <span className="singleProd-sale_text">
                      Flash Sale end in:
                    </span>

                    <Box>
                      <Countdown
                        daysInHours={false}
                        date={Date.now() + 5000000000}
                        renderer={renderer}
                      />
                    </Box>

                    {/* <span className="singleProd-sale_text">
                      164D : 4H : 58M : 17S
                    </span> */}
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "start",
                  }}
                >
                  <Box className="quality-picker_container">
                    <QuantityPicker
                      min={1}
                      max={5}
                      onChange={(value) => handleQuantityChange()}
                      smooth
                      value={1}
                      class="quality_picker"
                    />
                  </Box>

                  <Box
                    sx={{ margin: { xs: "20px 0px", md: "0px 0px 0px 50px" } }}
                    className="singleProd-button-wrapper"
                  >
                    <ReusableButton
                      buttonName="ADD TO CART"
                      size="Medium"
                      className="addToCart_button"
                    />
                  </Box>
                </Box>

                <Box
                  sx={{ display: "flex", marginTop: "40px" }}
                  className="singleProd-icons"
                >
                  <Box>
                    <ReusableButton
                      startIcon={
                        <FavoriteBorderOutlinedIcon className="single-icon" />
                      }
                      buttonName="Add To Wishlist"
                      size="Medium"
                      className="single-icon-text"
                    />
                  </Box>

                  <Box>
                    <ReusableButton
                      startIcon={
                        <CompareArrowsOutlinedIcon className="single-icon" />
                      }
                      buttonName="Add To Compare"
                      size="Medium"
                      className="single-icon-text"
                    />
                  </Box>
                </Box>

                <Divider sx={{ margin: "20px 0px", borderColor: "#9C9C9C" }} />

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      margin: "16px 0px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="singleProd-desc_text"
                      style={{ marginRight: "15px" }}
                    >
                      Share:
                    </span>
                    <Box
                      sx={{
                        marginRight: "25px",
                      }}
                    >
                      <img src={Fb} alt="facebook" />
                    </Box>

                    <Box
                      sx={{
                        marginRight: "25px",
                      }}
                    >
                      <img src={Twitter} alt="Twitter" />
                    </Box>

                    <Box
                      sx={{
                        marginRight: "25px",
                      }}
                    >
                      <img src={Insta} alt="Insta" />
                    </Box>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "center" }}
                    className="singleProd-icons"
                  >
                    <TaskAltOutlinedIcon
                      className="single-icon"
                      sx={{ fontSize: "1.25rem", marginRight: "10px" }}
                    />
                    <span className="singleProd-desc_text">
                      30 days easy returns
                    </span>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "8px",
                    }}
                    className="singleProd-icons"
                  >
                    <TaskAltOutlinedIcon
                      className="single-icon"
                      sx={{ fontSize: "1.25rem", marginRight: "10px" }}
                    />
                    <span className="singleProd-desc_text">
                      Order yours before 2.30pm for same day disptach
                    </span>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ margin: "60px 0px 0px 0px" }}>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  className="singleProd-TabList"
                >
                  <Tab
                    label="Description"
                    value="1"
                    className="singleProd-tab_Text"
                  />
                  <Tab
                    label={`Reviews (${count})`}
                    value="2"
                    className="singleProd-tab_Text"
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Description />
              </TabPanel>
              <TabPanel value="2">
                <Review />
              </TabPanel>
            </TabContext>
          </Box>

          <Box sx={{ margin: "50px 0px" }}>
            <Box sx={{ margin: "40px 0px 20px 0px" }}>
              <span className="newestProduct_text">You Might Also Like</span>
              <Box sx={{ textAlign: "center", marginTop: "10px" }}>
                <span className="preOrder_text">Related Products</span>
              </Box>
            </Box>
            <Grid container spacing={2}>
              {featuredProducts.map((items, index) => (
                <Grid item xs={12} sm={6} md={3}>
                  <div className="" key={items.id} style={{ margin: "8px" }}>
                    <Link
                      to="/singleProducts"
                      style={{ textDecoration: "none" }}
                    >
                      <Card className="product-card">
                        <CardActionArea className="cardActionArea">
                          <Box className="product-img">
                            <IconButton
                              aria-label="favorite"
                              onClick={() => toggleFavorite(index)}
                            >
                              {isFavorited[index] ? (
                                <FavoriteIcon
                                  sx={{
                                    color: "#FF003A",
                                    margin: "15px 20px",
                                  }}
                                />
                              ) : (
                                <FavoriteBorderIcon
                                  sx={{
                                    color: "#FF003A",
                                    margin: "15px 20px",
                                  }}
                                />
                              )}
                            </IconButton>
                            <CardMedia
                              component="img"
                              className="product-card-img-featured"
                              height="160"
                              image={items.img}
                              alt={items.name}
                            />
                          </Box>
                          <CardContent
                            className="card_content"
                            sx={{ marginTop: "6px" }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <span className="product_text">
                                Electrobot Xtreme Gaming Electrobot Xtreme
                                Gaming
                              </span>
                              <span className="product_descrp-text">
                                TYPE: Electrobot{" "}
                              </span>
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "5px",
                                alignItems: "center",
                              }}
                            >
                              <span className="price-product_text">468.00</span>

                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <ReactStars
                                  className="stars"
                                  count={1}
                                  value={1}
                                  size={24}
                                  activeColor="#FCC246"
                                />
                                <span className="review-product_text">
                                  4.9 (98 reviews)
                                </span>
                              </Box>
                            </Box>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Link>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default SingleProduct;
