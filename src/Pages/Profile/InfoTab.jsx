import { Box, Grid } from "@mui/material";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Name from "../../assests/profile-account.svg";
import Email from "../../assests/profile-email.svg";
import Fb from "../../assests/profile-fb.svg";
import Twitter from "../../assests/profile-twitter.svg";
import Phone from "../../assests/profile-phn.svg";
import Loc from "../../assests/profile-loc.svg";
import { InputField } from "../../Components/InputField/InputField";
import ResuableDropdown from "../../Components/DropDown/DropDown";

const Cart = [
  { id: "Male", full_name: "Male" },
  { id: "Female", full_name: "Female" },
  { id: "Others", full_name: "Others" },
];

const InfoTab = () => {
  return (
    <Box sx={{}} className="info-tab">
      <span>Personal Details</span>

      <Box sx={{ background: "", marginTop: "25px" }}>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <InputField
              id="input-with-icon-textfield"
              className="profile-inputfields"
              sx={{ background: "" }}
              size="Medium"
              value="Varun kumar"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Name} alt="Name" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              placeholder="Name here"
            />
          </Grid>

          <Grid item xs={6}>
            <InputField
              id="input-with-icon-textfield"
              className="profile-inputfields"
              sx={{ background: "" }}
              size="Medium"
              value="varun@gmail.com"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Email} alt="Name" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              placeholder="Email here"
            />
          </Grid>

          <Grid item xs={6}>
            <InputField
              id="input-with-icon-textfield"
              className="profile-inputfields"
              size="Medium"
              sx={{ background: "" }}
              value="varunkumar"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Fb} alt="Name" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              placeholder="Facebook Id here"
            />
          </Grid>

          <Grid item xs={6}>
            <InputField
              id="input-with-icon-textfield"
              className="profile-inputfields"
              size="Medium"
              sx={{ background: "" }}
              value="varunkumar"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Twitter} alt="Name" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              placeholder="Twitter id here"
            />
          </Grid>

          <Grid item xs={6}>
            <InputField
              id="input-with-icon-textfield"
              className="profile-inputfields"
              size="Medium"
              sx={{ background: "" }}
              value="8015586166"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Phone} alt="Name" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              placeholder="Phone no here"
            />
          </Grid>

          <Grid item xs={6}>
            <ResuableDropdown
              size="small"
              type="text"
              optionText="Select Recruiter"
              spanText="Select Recruiter designation"
              style={{ width: "100%" }}
              name="RecruitersDesignation"
              options={Cart}
              className="profile_select"
              placeholder="Select your gender"
              // onChange={handleInputChangeDropdown}
            />
          </Grid>

          <Grid item xs={12}>
            <InputField
              id="input-with-icon-textfield"
              className="profile-inputfields"
              size="Medium"
              value="3045 jublee hills"
              sx={{ background: "" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Loc} alt="Name" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              placeholder="varunkumar"
            />
          </Grid>

          <Grid item xs={12}>
            <InputField
              id="input-with-icon-textfield"
              variant="standard"
              placeholder="Other Notes"
              className="profile-textArea-inputfields"
              multiline={true}
              rows={4}
              value="Hi there, this is my bio..."
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InfoTab;
