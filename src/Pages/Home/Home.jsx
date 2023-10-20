import React, { useEffect } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import { Box, Grid } from "@mui/material";
import HomeBanner from "../../assests/homeBanner.svg";
import ReusableButton from "../../Components/Button/Button";
import {
  PreOrder,
  HotOnSale,
  ComingSoon,
  HomeBannerCarousel,
} from "../../Components/Carousel/Carousel";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { Headphones, PlayStation, TrustUsData, Xbox } from "./Tabs";
import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import { SignUpModals, LoginModals } from "../../Components/Modals/Modals";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Components/useContext/useContext";
import { useContext } from "react";

const Home = () => {
  const { data, setData, count, setCount } = useContext(AuthContext);

  const navigate = useNavigate();
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [callSignModal, setCallSignModal] = useState(false);
  const [loginInModalopen, setLoginModalOpen] = useState(false);

  useEffect(() => {
    // setCallSignModal(true);
    // setLoginModalOpen(true);
  }, []);

  console.log(data, "data");

  return (
    <Box>
      <Box className="home_wrapper" sx={{ padding: { xs: "30px", md: "0px" } }}>
        {loginInModalopen ? (
          <>
            <LoginModals
              setOpen={setLoginModalOpen}
              open={loginInModalopen}
              setCallSignModal={setCallSignModal}
            />
          </>
        ) : null}
        <Box>
          
          <HomeBannerCarousel />
        </Box>

        <Box sx={{ margin: "40px 0px 20px 0px" }}>
          <span className="newestProduct_text">
            Be the first to try our newest product
          </span>
          <Box sx={{ textAlign: "center", marginTop: "10px" }}>
            <span className="preOrder_text">Pre Order</span>
            <Box sx={{ marginTop: "20px" }}>
              <PreOrder
                setData={(product) =>
                  setData((prevData) => [...prevData, product])
                }
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ margin: "40px 0px 20px 0px" }}>
          <span className="newestProduct_text">
            Hurry before stock runs out
          </span>
          <Box sx={{ textAlign: "center", marginTop: "10px" }}>
            <span className="preOrder_text">Hot On Sale</span>
            <Box sx={{ marginTop: "20px" }}>
              <HotOnSale
                setData={(product) =>
                  setData((prevData) => [...prevData, product])
                }
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ margin: "40px 0px 20px 0px" }}>
          <span className="newestProduct_text">The wait is almost over</span>
          <Box sx={{ textAlign: "center", marginTop: "10px" }}>
            <span className="preOrder_text">Coming Soon</span>
            <Box sx={{ marginTop: "20px" }}>
              <ComingSoon
                setData={(product) =>
                  setData((prevData) => [...prevData, product])
                }
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            typography: "body1",
            margin: "40px 0px 0px 0px",
          }}
        >
          <TabContext value={value}>
            <Box className="home_tabs-box" sx={{ padding: { xs: "20px" } }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                centered
              >
                <Tab label="Xbox" className="tab-heading_text" value="1" />
                <Tab label="Headphone" className="tab-heading_text" value="2" />
                <Tab
                  label="Playstation"
                  className="tab-heading_text"
                  value="3"
                />
              </TabList>
            </Box>

            <TabPanel value="1">
              <Xbox
                setData={(product) =>
                  setData((prevData) => [...prevData, product])
                }
              />
            </TabPanel>

            <TabPanel value="2">
              <Headphones
                setData={(product) =>
                  setData((prevData) => [...prevData, product])
                }
              />
            </TabPanel>

            <TabPanel value="3">
              <PlayStation
                setData={(product) =>
                  setData((prevData) => [...prevData, product])
                }
              />
            </TabPanel>
          </TabContext>
        </Box>

        <Box className="people-trust-us_conatiner" sx={{}}>
          <span className="newestProduct_text">What people say about us</span>
          <span className="preOrder_text">PEOPLE TRUST US</span>

          <Grid container spacing={2}>
            <Grid item xs={0} md={1.5}></Grid>
            <Grid item xs={12} md={9}>
              <Box className="trust-us_carousel-wrapper">
                <TrustUsData />
              </Box>
            </Grid>
            <Grid item xs={0} md={1.5}></Grid>
          </Grid>
        </Box>
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
