import { Box, Divider, Grid, IconButton } from "@mui/material";
import React from "react";
import ReusableButton from "../../Components/Button/Button";
import DeleteIcon from "../../assests/Add_delete.svg";

const AddressTab = () => {
  return (
    <Box sx={{ padding: { xs: "5px 10px", md: "20px 30px" } }}>
      <Box
        className="address-button_wrapper"
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center" },
        }}
      >
        <span className="personal-heading_text">Personal Details</span>

        <Box
          sx={{
            margin: { xs: "10px 0px 0px 0px", md: "0px" },
            display: { xs: "flex", md: "flex" },
          }}
        >
          <ReusableButton
            buttonName="+ Add New Address"
            size="small"
            className="address_button"
          />
        </Box>
      </Box>

      <Box sx={{ marginTop: "25px" }}>
        <span className="default-add_text">Default Address</span>

        <Box
          sx={{
            padding: "20px",
            background: "#0E0E0E80",
            margin: { xs: "0px", md: "20px" },
          }}
        >
          <Box className="address-panel">
            <span>Varun kumar</span>
            <span>
              22, 7th East Cross Road, anna nagar, Chennai<br></br>
              Anna nagar East <br></br>Chennai 632008<br></br> TamilNadu
            </span>
            <span>Mobile : 8015854222</span>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "#BEBBCD" }} />

        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            className="address-edit-wrapper"
            sx={{ display: "flex", justifyContent: "center", padding: "12px" }}
          >
            <ReusableButton
              buttonName="Edit"
              size="small"
              className="address-edit_button"
            />
          </Grid>

          <Grid
            item
            xs={6}
            sx={{ display: "flex", justifyContent: "center", padding: "12px" }}
          >
            <IconButton aria-label="delete" size="small">
              <img src={DeleteIcon} alt="deleteIcon" />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddressTab;
