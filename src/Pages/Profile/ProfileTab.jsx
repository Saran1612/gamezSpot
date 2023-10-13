import { Box, Grid } from "@mui/material";
import React from "react";
import ReusableButton from "../../Components/Button/Button";
import ProfilePic from "../../assests/Ellipse 74.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import CamPic from "../../assests/picc.svg";
import Orders from "../../assests/orders.png";
import Heart from "../../assests/heart.png";
import Address from "../../assests/address.png";
import Account from "../../assests/account.png";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 0,
  borderRadius: "50%",
});

const ProfileTab = () => {
  const profileData = [
    { id: 1, name: "Orders", badge: 3, img: Orders },
    { id: 2, name: "Wishlist", badge: 5, img: Heart },
    { id: 3, name: "Address", badge: 0, img: Address },
    { id: 4, name: "Account info", badge: 0, img: Account },
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center" },
          }}
        >
          <Box>
            <img src={ProfilePic} alt="profilePic" />
            <Button
              component="label"
              variant="contained"
              className="file-upload-button"
              sx={{
                padding: "0px",
                minWidth: "28px",
                borderRadius: "50%",
                minHeight: "28px",
                background: "#FF003A",
                position: "relative",
                right: "25px",
                bottom: "10px",
              }}
              startIcon={
                <img
                  src={CamPic}
                  alt="CamPic"
                  className="cloud_icon"
                  sx={{ margin: "0px" }}
                />
              }
            >
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "start" },
              justifyContent: "center",
            }}
          >
            <span className="profile-heading-text">Welcome Mr. Admin!</span>
            <span className="profile-subheading-text">
              You have 08 notification
            </span>
          </Box>
        </Box>

        <Box className="profile-logout-container">
          <ReusableButton
            buttonName="Logout"
            size="medium"
            className="profile-logout_button"
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", marginTop: "30px" }}>
        <Grid container spacing={2}>
          {profileData.map((items, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #B0B0B0",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "135px",
                  width: "100%",
                }}
              >
                <Badge
                  badgeContent={items.badge}
                  color="primary"
                  className="profile_badge"
                >
                  <img
                    src={items.img}
                    alt={items.name}
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                </Badge>
                <span className="profile-cards-text">{items.name}</span>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfileTab;
