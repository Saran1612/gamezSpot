import React from "react";
import "./Register.css";
import { Box, Grid, Link } from "@mui/material";
import { InputField } from "../../Components/InputField/InputField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "../../assests/dashicons_email-alt.svg";
import Lock from "../../assests/Vector (1).svg";
import StripsOne from "../../assests/Group 157.svg";
import StripsTwo from "../../assests/Group 156.svg";
import User from "../../assests/bxs_user.svg";
import ReusableButton from "../../Components/Button/Button";

const Register = () => {
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={7}>
          <Box className="login_bgContainer">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box>
                <span className="login_header-text">GamezSpot</span>
                <img
                  src={StripsTwo}
                  alt="stripsTwo"
                  style={{ padding: "0px 0px 10px 25px" }}
                />
              </Box>
              <span className="login_header-descp">
                Level up your gaming experience with our immersive gaming
                website.
              </span>

              <Box sx={{ width: "100%", paddingTop: "25px" }}>
                <img src={StripsOne} alt="stripsOne" />
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={5}>
          <Box className="login_formContainer">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "12px 0px",
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <span className="login-hello_text">Hello!</span>
              <span className="login-descpt">Sign Up to Get Started</span>
            </Box>

            <Box sx={{ width: "100%" }}>
              <Box sx={{ margin: "10px 0px" }}>
                <InputField
                  id="input-with-icon-textfield"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={User} alt="fullname" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  placeholder="Full Name"
                  className="login_inputFields"
                />
              </Box>

              <Box sx={{ margin: "10px 0px" }}>
                <InputField
                  id="input-with-icon-textfield"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={EmailIcon} alt="email" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  placeholder="Email Address"
                  className="login_inputFields"
                />
              </Box>
              <Box sx={{ margin: "18px 0px" }}>
                <InputField
                  id="input-with-icon-textfield"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Lock} alt="Password" width="24" height="22" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  placeholder="Password"
                  className="login_inputFields"
                />
              </Box>

              <Box
                className="login-button_container"
                sx={{ width: "100%", marginTop: "30px" }}
              >
                <ReusableButton
                  buttonName="Register"
                  size="large"
                  className="login_button"
                />
              </Box>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
