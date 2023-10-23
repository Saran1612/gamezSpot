import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ResuableDropdown from "../../Components/DropDown/DropDown";
import "./Products.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RemoveIcon from "@mui/icons-material/Remove";
import ReactStars from "react-rating-stars-component";
import Slider from "@mui/material/Slider";
import ReusableButton from "../../Components/Button/Button";
import Joystick from "../../assests/joystick.svg";
import { Link } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Triangle } from "react-loader-spinner";
import { useEffect } from "react";

function valuetext(value) {
  return `${value}°C`;
}

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
    price: "170.00",
    star: "3.9",
  },
  { id: 7, img: Joystick, name: "Enchanted Disney", price: "110", star: "4" },
  { id: 8, img: Joystick, name: "Platinum Oval", price: "90", star: "4.8" },
  { id: 9, img: Joystick, name: "Platinum Oval", price: "90", star: "4.8" },
];

const Products = () => {
  const [value, setValue] = useState([20, 37]);
  const [isFavorited, setIsFavorited] = useState(
    Array(featuredProducts.length).fill(false)
  );
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    //loader
    setStopped(true);
    const interval = setInterval(() => {
      setStopped(false);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleFavorite = (index) => {
    const updatedIsFavorited = [...isFavorited];
    updatedIsFavorited[index] = !updatedIsFavorited[index];
    console.log(updatedIsFavorited, "updatedIsFavorited");
    setIsFavorited(updatedIsFavorited);
  };

  const Product = [
    { id: "JAPAN", full_name: "Japan" },
    { id: "INDIA", full_name: "India" },
    { id: "AMERICA", full_name: "America" },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="cart-bg_img">
      {stopped === true ? (
        <Box
          sx={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
          }}
        >
          <Triangle
            height="60"
            width="60"
            color="#777777"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </Box>
      ) : (
        <>
          <Box
            sx={{
              padding: {
                xs: "25px 50px 20px 40px",
                md: "50px 100px 40px 80px",
              },
            }}
          >
            <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
              <Grid item xs={7}></Grid>

              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <span className="filter-result_text">
                    Showing all 6 results
                  </span>
                </Box>
              </Grid>

              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <ResuableDropdown
                    size="small"
                    type="text"
                    optionText="Select Recruiter"
                    spanText="Select Recruiter designation"
                    style={{}}
                    name="RecruitersDesignation"
                    options={Product}
                    defaultValue="Filter"
                    className="product-filter_select"
                    // onChange={handleInputChangeDropdown}
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={3}>
                <Box>
                  <Box>
                    <Accordion className="product_accordion">
                      <AccordionSummary
                        expandIcon={<RemoveIcon className="remove_product" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <span className="filter-option_text">
                          Product Categories
                        </span>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <FormControl>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="female"
                              name="radio-buttons-group"
                              className="filter-option_radio"
                            >
                              <FormControlLabel
                                value="Deals"
                                control={<Radio />}
                                label="Deals"
                              />
                              <FormControlLabel
                                value="videoGame"
                                control={<Radio />}
                                label="Video Game Controllers"
                              />
                              <FormControlLabel
                                value="headphones"
                                control={<Radio />}
                                label="Headphones"
                              />
                              <FormControlLabel
                                value="mousePad"
                                control={<Radio />}
                                label="Mouse Pad"
                              />
                              <FormControlLabel
                                value="keyboard"
                                control={<Radio />}
                                label="Keyboard"
                              />
                              <FormControlLabel
                                value="xbox"
                                control={<Radio />}
                                label="Xbox"
                              />
                              <FormControlLabel
                                value="playstation"
                                control={<Radio />}
                                label="Play Station"
                              />
                            </RadioGroup>
                          </FormControl>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </Box>

                  <Box>
                    <Accordion className="product_accordion">
                      <AccordionSummary
                        expandIcon={<RemoveIcon className="remove_product" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <span className="filter-option_text">
                          Filter by Color
                        </span>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <FormControl>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="female"
                              name="radio-buttons-group"
                              className="filter-option-color_radio"
                            >
                              <FormControlLabel
                                value="Red"
                                control={<Radio />}
                                label="Red"
                                className="red-radio"
                              />
                              <FormControlLabel
                                value="Blue"
                                control={<Radio />}
                                label="Blue"
                                className="blue-radio"
                              />
                              <FormControlLabel
                                value="Yellow"
                                control={<Radio />}
                                label="Yellow"
                                className="yellow-radio"
                              />
                              <FormControlLabel
                                value="Green"
                                control={<Radio />}
                                label="Green"
                                className="green-radio"
                              />
                            </RadioGroup>
                          </FormControl>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </Box>

                  <Box>
                    <Accordion className="product_accordion">
                      <AccordionSummary
                        expandIcon={<RemoveIcon className="remove_product" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <span className="filter-option_text">
                          Average Rating
                        </span>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "start",
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
                          {/* <span>{randomNumberInRange(1, 5)}</span> */}
                          <span>(7)</span>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </Box>

                  <Box>
                    <Accordion className="product_accordion">
                      <AccordionSummary
                        expandIcon={<RemoveIcon className="remove_product" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <span className="filter-option_text">
                          Filter by Price
                        </span>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box sx={{ width: "100%" }}>
                          <Slider
                            getAriaLabel={() => "Temperature range"}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            sx={{ color: "#FF003A", marginBottom: "5px" }}
                            riaValueText={valuetext}
                          />

                          <span className="slider-price_text">
                            Price: Rs.10 - Rs.200
                          </span>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </Box>

                  <Box
                    className="filter-product_container"
                    sx={{ marginTop: "40px" }}
                  >
                    <ReusableButton
                      buttonName="Filter"
                      size="small"
                      className="product-filter_button"
                    />
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={8} lg={9}>
                <Grid container spacing={2} sx={{}}>
                  {featuredProducts.map((items, index) => (
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <div
                        className=""
                        key={items.id}
                        style={{ margin: "8px" }}
                      >
                        <Link
                          to="/home/singleProducts"
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
                                  <span className="price-product_text">
                                    468.00
                                  </span>

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
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Footer />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Products;
