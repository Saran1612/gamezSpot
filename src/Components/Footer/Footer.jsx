import React from "react";
import "./Footer.css";
import Logo from "../../assests/footer_logo.svg";
import { Box, Grid } from "@mui/material";
import Insta from "../../assests/Group 1000002602.svg";
import Fb from "../../assests/Group 1000002601.svg";
import Twitter from "../../assests/Group 1000002714.svg";

const Footer = () => {
  return (
    <Box
      className="footer_container"
      sx={{
        padding: { xs: "25px 50px 20px 40px", md: "50px 100px 40px 80px" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <img src={Logo} alt="logo" width="124" height="72" />
            <span className="level-up_text">
              Level up your gaming experience with our immersive gaming website
            </span>

            <Box sx={{ display: "flex", margin: "30px 0px" }}>
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
          </Box>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <Box>
            <Box>
              <span className="footer_heading-text">About Us</span>
              <div class="border1"></div>
            </Box>

            <Box className="list-items_text">
              <ul style={{ listStyle: "none", padding: "0px" }}>
                <a href="#/" className="list-text_aText">
                  <li>About Us</li>
                </a>
                <a href="#/" className="list-text_aText">
                  <li>Contact Us</li>
                </a>
                <a href="#/" className="list-text_aText">
                  <li>FAQ's</li>
                </a>
                <a href="#/" className="list-text_aText">
                  <li>Privacy Policy</li>
                </a>
              </ul>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <Box>
            <Box>
              <span className="footer_heading-text">Navigation</span>
              <div class="border1"></div>
            </Box>

            <Box className="list-items_text">
              <ul style={{ listStyle: "none", padding: "0px" }}>
                <li>
                  <a href="#/" className="list-text_aText">
                    Search
                  </a>
                </li>

                <li>
                  <a href="#/" className="list-text_aText">
                    All Collections
                  </a>
                </li>

                <li>
                  {" "}
                  <a href="#/" className="list-text_aText">
                    All Products
                  </a>
                </li>

                <li>
                  {" "}
                  <a href="#/" className="list-text_aText">
                    Article Page
                  </a>
                </li>
              </ul>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <Box>
            <Box>
              <span className="footer_heading-text">Contact Us</span>
              <div class="border1"></div>
            </Box>

            <Box className="list-items_text">
              <ul style={{ listStyle: "none", padding: "0px" }}>
                <li>
                  <span className="list-text_aText">
                    2750 Quadra Street Victoria Road, New York, Canada
                  </span>
                </li>
                <li>
                  <span className="list-text_aText">+1 (123) 456 7890</span>
                </li>
                <li>
                  <span className="list-text_aText">gamesports@gmail.com</span>
                </li>
              </ul>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
