import React from "react";
import "./Login.css";
import { Box, Grid, Link } from "@mui/material";
import { InputField } from "../../Components/InputField/InputField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "../../assests/dashicons_email-alt.svg";
import Lock from "../../assests/Vector (1).svg";
import StripsOne from "../../assests/Group 157.svg";
import StripsTwo from "../../assests/Group 156.svg";
import ReusableButton from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/home");
  };
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
              <span className="login-hello_text">Hello Again!</span>
              <span className="login-descpt">Welcome Back</span>
            </Box>

            <Box sx={{ width: "100%" }}>
              <Box sx={{ margin: "10px 0px" }}>
                <InputField
                  id="input-with-icon-textfield"
                  // label="Email Address"
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
                  // label="Email Address"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Lock} alt="Password" />
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
                  buttonName="Login"
                  size="large"
                  className="login_button"
                  onClick={handleLoginClick}
                />
              </Box>

              <Box
                sx={{ marginTop: "10px", width: "100%" }}
                className="forgot-pass_container"
              >
                <Link href="#" className="forgot-password_text">
                  Forgot Password
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
