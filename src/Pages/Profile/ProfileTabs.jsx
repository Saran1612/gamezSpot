import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Profile.css";
import { Grid } from "@mui/material";
import ProfilePic from "../../assests/Vector.png";
import InfoPic from "../../assests/info_FILL0_wght400_GRAD0_opsz24 1.png";
import NotifyPic from "../../assests/notifications_FILL0_wght400_GRAD0_opsz24 1.png";
import LockPic from "../../assests/Vector (1).png";
import OrderPic from "../../assests/list_alt_FILL0_wght400_GRAD0_opsz24 1.png";
import HomePic from "../../assests/home_pin_FILL0_wght400_GRAD0_opsz24 2.png";
import ProfileTab from "./ProfileTab";
import InfoTab from "./InfoTab";
import AddressTab from "./AddressTab";
import OrdersTab from "./OrdersTab";
import NotifyTab from "./NotifyTab";
import PasswordTab from "./PasswordTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const ProfileTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="cart-bg_img">
      <Box>
        {/* <Header /> */}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "transparent",
          display: "flex",
          color: "#FFFFFF",
          padding: { xs: "5px 20px 5px 20px", md: "50px 100px 40px 80px" },
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <Tabs
              // orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className="profile-tabs"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab
                className="profile-tabs_text"
                icon={<img className="tabs_pics" src={ProfilePic} alt="" />}
                label="Profile"
                {...a11yProps(0)}
              />
              <Tab
                className="profile-tabs_text"
                icon={<img className="tabs_pics" src={InfoPic} alt="" />}
                label="Information"
                {...a11yProps(1)}
              />
              <Tab
                className="profile-tabs_text"
                icon={<img className="tabs_pics" src={HomePic} alt="" />}
                label="Address"
                {...a11yProps(2)}
              />
              <Tab
                className="profile-tabs_text"
                icon={<img className="tabs_pics" src={OrderPic} alt="" />}
                label="My Orders"
                {...a11yProps(3)}
              />
              <Tab
                className="profile-tabs_text"
                icon={<img className="tabs_pics" src={NotifyPic} alt="" />}
                label="Notification"
                {...a11yProps(4)}
              />
              <Tab
                className="profile-tabs_text"
                icon={<img className="tabs_pics" src={LockPic} alt="" />}
                label="Change Password"
                {...a11yProps(5)}
              />
            </Tabs>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className="profile-tabs"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab
                className="profile-tabs_text"
                icon={<img className="tabs_pics" src={ProfilePic} alt="" />}
                label="Profile"
                {...a11yProps(0)}
              />
              <Tab
                className="profile-tabs_text"
                icon={<img className="tabs_pics" src={InfoPic} alt="" />}
                label="Information"
                {...a11yProps(1)}
              />
              <Tab
                className="profile-tabs_text"
                icon={<img className="tabs_pics" src={HomePic} alt="" />}
                label="Address"
                {...a11yProps(2)}
              />
              <Tab
                className="profile-tabs_text"
                icon={<img className="tabs_pics" src={OrderPic} alt="" />}
                label="My Orders"
                {...a11yProps(3)}
              />
              <Tab
                className="profile-tabs_text"
                icon={<img className="tabs_pics" src={NotifyPic} alt="" />}
                label="Notification"
                {...a11yProps(4)}
              />
              <Tab
                className="profile-tabs_text"
                icon={<img className="tabs_pics" src={LockPic} alt="" />}
                label="Change Password"
                {...a11yProps(5)}
              />
            </Tabs>
          </Grid>

          <Grid item xs={12} md={8}>
            <TabPanel value={value} index={0} className="profile-tabpanel">
              <ProfileTab />
            </TabPanel>
            <TabPanel value={value} index={1} className="profile-tabpanel">
              <InfoTab />
            </TabPanel>
            <TabPanel value={value} index={2} className="">
              <AddressTab />
            </TabPanel>
            <TabPanel value={value} index={3} className="profile-tabpanel">
              <OrdersTab />
            </TabPanel>
            <TabPanel value={value} index={4} className="profile-tabpanel">
              <NotifyTab />
            </TabPanel>
            <TabPanel value={value} index={5} className="profile-tabpanel">
              <PasswordTab />
            </TabPanel>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default ProfileTabs;
