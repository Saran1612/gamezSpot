import React from "react";
import "./Modals.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { InputField } from "../InputField/InputField";
import { InputAdornment } from "@mui/material";
import ReusableButton from "../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import Mobile from "../../assests/modal-phone.svg";
import Email from "../../assests/modal-email.svg";
import Password from "../../assests/modal-pass.svg";
import CloseImg from "../../assests/modalClose.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#000000",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
};

export const SignUpModals = (props) => {
  const { open, setOpen } = props;
  // const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [otp, setOtp] = useState("");
  const [shouldContinue, setShouldContinue] = useState(false);

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const handleSignUpRegisterClick = () => {
    setOpen(false);
    setShouldContinue(false);
  };

  const handleSignUpContinueClick = () => {
    // setOpen(false);
    setShouldContinue(true);
  };

  return (
    <Box className="modal-wrapper">
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="main-modal-container"
      >
        <Box sx={style} className="box-modal">
          <Box
            style={{
              position: "absolute",
              top: "-16px",
              right: "-14px",
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            <img src={CloseImg} alt="img" />
          </Box>
          <span className="login-modal_header">Hello!</span>
          <span className="login-modal_subheader">Sign Up to Get Started</span>

          <Box sx={{ width: "100%", marginTop: "16px" }}>
            <Box sx={{ margin: "18px 0px" }}>
              <InputField
                id="input-with-icon-textfield"
                type="number"
                // label="Email Address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Mobile} alt="Mobile" />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                placeholder="Mobile Number"
                className="login_inputFields modal-input"
              />
            </Box>

            <Box sx={{ margin: "18px 0px" }}>
              <InputField
                id="input-with-icon-textfield"
                // label="Email Address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Email} alt="email" />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                placeholder="Email Address"
                className="login_inputFields modal-input"
              />
            </Box>

            <Box sx={{ margin: "18px 0px" }}>
              <InputField
                id="input-with-icon-textfield"
                // label="Email Address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Password} alt="Password" />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                placeholder="Password"
                className="login_inputFields modal-input"
              />
            </Box>

            {shouldContinue ? (
              <Box>
                <Box sx={{ margin: "24px 0px 0px 0px" }}>
                  <MuiOtpInput
                    value={otp}
                    onChange={handleChange}
                    className="login-modal_otp"
                  />
                  <Link href="#" className="modal-resend_text">
                    Resend
                  </Link>
                </Box>

                <Box
                  className="login-button_container"
                  sx={{ width: "100%", marginTop: "18px" }}
                >
                  <ReusableButton
                    buttonName="Register"
                    size="large"
                    className="login_button"
                    onClick={handleSignUpRegisterClick}
                  />
                </Box>
              </Box>
            ) : (
              <Box
                className="login-button_container"
                sx={{ width: "100%", marginTop: "30px" }}
              >
                <ReusableButton
                  buttonName="CONTINUE"
                  size="large"
                  className="login_button"
                  onClick={handleSignUpContinueClick}
                />
              </Box>
            )}

            <Box
              sx={{
                marginTop: "20px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              className=""
            >
              <span className="Modal-signIn_text">
                Already have an account ?
              </span>
              <span href="#" className="Modal-signIn_text red">
                Sign In!
              </span>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export const LoginModals = (props) => {
  const { open, setOpen, setCallSignModal } = props;

  // const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [otp, setOtp] = useState("");
  const [shouldContinue, setShouldContinue] = useState(false);

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const handleSignUpRegisterClick = () => {
    setOpen(false);
    setShouldContinue(false);
  };

  const handleSignUpContinueClick = () => {
    // setOpen(false);
    setShouldContinue(true);
  };

  // const handleSignUpClick = () => {
  //   setOpen(false);
  //   setCallSignModal(true);
  // };

  return (
    <Box className="modal-wrapper">
      {/* <Button onClick={handleOpen}>Open Login modal</Button> */}
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="main-modal-container"
      >
        <Box sx={style} className="box-modal">
          <Box
            style={{
              position: "absolute",
              top: "-16px",
              right: "-14px",
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            <img src={CloseImg} alt="img" />
          </Box>
          <span className="login-modal_header">Hello!</span>
          <span className="login-modal_subheader">Sign In to Get Started</span>

          <Box sx={{ width: "100%", marginTop: "16px" }}>
            {/* <Box sx={{ margin: "18px 0px" }}>
              <InputField
                id="input-with-icon-textfield"
                type="number"
                // label="Email Address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Mobile} alt="Mobile" />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                placeholder="Mobile Number"
                className="login_inputFields modal-input"
              />
            </Box> */}

            <Box sx={{ margin: "18px 0px" }}>
              <InputField
                id="input-with-icon-textfield"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Mobile} alt="email" />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                placeholder="Mobile Number / Email Address"
                className="login_inputFields modal-input"
              />
            </Box>

            <Box sx={{ margin: "18px 0px" }}>
              <InputField
                id="input-with-icon-textfield"
                // label="Email Address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Password} alt="Password" />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                placeholder="Password"
                className="login_inputFields modal-input"
              />
            </Box>

            {shouldContinue ? (
              <Box>
                <Box sx={{ margin: "24px 0px 0px 0px" }}>
                  <MuiOtpInput
                    value={otp}
                    onChange={handleChange}
                    className="login-modal_otp"
                  />
                  <Link href="#" className="modal-resend_text">
                    Resend
                  </Link>
                </Box>

                <Box
                  className="login-button_container"
                  sx={{ width: "100%", marginTop: "18px" }}
                >
                  <ReusableButton
                    buttonName="Login"
                    size="large"
                    className="login_button"
                    onClick={handleSignUpRegisterClick}
                  />
                </Box>
              </Box>
            ) : (
              <Box
                className="login-button_container"
                sx={{ width: "100%", marginTop: "30px" }}
              >
                <ReusableButton
                  buttonName="CONTINUE"
                  size="large"
                  className="login_button"
                  onClick={handleSignUpContinueClick}
                />
              </Box>
            )}

            <Box
              sx={{
                marginTop: "20px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              className=""
            >
              <span className="Modal-signIn_text">Don’t have an account ?</span>
              <span
                className="Modal-signIn_text red"
                // onClick={handleSignUpClick}
              >
                Sign Up!
              </span>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
