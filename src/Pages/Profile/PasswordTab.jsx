import { Box, Grid } from "@mui/material";
import React from "react";
import ReusableButton from "../../Components/Button/Button";
import { InputField } from "../../Components/InputField/InputField";

const PasswordTab = () => {
  return (
    <Box>
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sx={{ marginBottom: "15px" }}>
          <InputField
            id="input-with-icon-textfield"
            className="password-inputfields"
            sx={{ background: "" }}
            label="Old Password"
            size="Medium"
            value=""
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <img src={Name} alt="Name" />
            //     </InputAdornment>
            //   ),
            // }}
            variant="outlined"
            placeholder="Old Password"
          />
        </Grid>

        <Grid item xs={6}>
          <InputField
            id="input-with-icon-textfield"
            className="password-inputfields"
            sx={{ background: "" }}
            label="New Password"
            size="Medium"
            value=""
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <img src={Name} alt="Name" />
            //     </InputAdornment>
            //   ),
            // }}
            variant="outlined"
            placeholder="New Password"
          />
        </Grid>

        <Grid item xs={6}>
          <InputField
            id="input-with-icon-textfield"
            className="password-inputfields"
            sx={{ background: "" }}
            label="Confirm Password"
            size="Medium"
            value=""
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <img src={Name} alt="Name" />
            //     </InputAdornment>
            //   ),
            // }}
            variant="outlined"
            placeholder="Confirm Password"
          />
        </Grid>

        <Grid
          item
          xs={2}
          className="passwordTab-uploadButton"
          sx={{ marginTop: "10px" }}
        >
          <ReusableButton
            buttonName="Update"
            size="small"
            className="Update_button"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PasswordTab;
