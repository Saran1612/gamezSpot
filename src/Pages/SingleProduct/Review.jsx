import { Box, Divider } from "@mui/material";
import React from "react";
import ReactStars from "react-rating-stars-component";
import ProfilePic from "../../assests/siggleProdPic.svg";
import { InputField } from "../../Components/InputField/InputField";
import ReusableButton from "../../Components/Button/Button";

const Review = () => {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <img src={ProfilePic} alt="profilePic" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <ReactStars
            className="stars"
            count={5}
            value={5}
            size={24}
            activeColor="#FCC246"
          />
          <span className="review-header_text">admin - May 1, 2021</span>
          <span className="review-header_text">
            Lorem ipsum dolor sit amet consectetur. Lobortis in duis in aliquam
            elementum .
          </span>
        </Box>
      </Box>

      <Box sx={{marginTop:"16px"}}>
        <span>Add a review</span>
        <Divider sx={{ margin: "20px 0px", borderColor: "#9C9C9C" }} />

        <span className="singleProd-Review-span_Text">
          Your email address will not be published. Required fields are marked *
        </span>

        <Box sx={{ margin: "20px 0px", display: { xs: "none", md: "block" } }}>
          <span className="singleProd-Review-span_Text">Your rating*</span>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ReactStars
              className="stars"
              count={1}
              value={0}
              size={24}
              activeColor="#FCC246"
            />
            <div class="vl"></div>

            <ReactStars
              className="stars"
              count={2}
              value={0}
              size={24}
              activeColor="#FCC246"
            />
            <div class="vl"></div>

            <ReactStars
              className="stars"
              count={3}
              value={0}
              size={24}
              activeColor="#FCC246"
            />
            <div class="vl"></div>

            <ReactStars
              className="stars"
              count={4}
              value={0}
              size={24}
              activeColor="#FCC246"
            />
            <div class="vl"></div>

            <ReactStars
              className="stars"
              count={5}
              value={0}
              size={24}
              activeColor="#FCC246"
            />
          </Box>
        </Box>

        <Box>
          <span className="singleProd-Review-span_Text">Your review*</span>
          <InputField
            id="input-with-icon-textfield"
            variant="standard"
            placeholder="Your review"
            className="billing-form_inputFields"
            multiline={true}
            rows={9}
          />
        </Box>

        <Box sx={{ margin: "20px 0px" }}>
          <span className="singleProd-Review-span_Text">Name*</span>
          <InputField
            id="input-with-icon-textfield"
            variant="standard"
            placeholder="Name"
            className="billing-form_inputFields"
            // multiline={true}
            // rows={9}
          />
        </Box>

        <Box>
          <span className="singleProd-Review-span_Text">Email*</span>
          <InputField
            id="input-with-icon-textfield"
            variant="standard"
            placeholder="Email"
            className="billing-form_inputFields"
            // multiline={true}
            // rows={9}
          />
        </Box>

        <Box
          sx={{
            // width: "100%",
            // display: "flex",
            justifyContent: "start",
            flexDirection: "column",
          }}
          className="singleProd-button-wrapper"
        >
          <span
            className="singleProd-Review-span_Text"
            style={{ paddingLeft: "20px" }}
          >
            Save my name, email and website in this browser for the time I
            comment.
          </span>
        </Box>

        <Box
          sx={{
            margin: "20px 0px",
            justifyContent: "start",
            flexDirection: "column",
          }}
          className="singleProd-button-wrapper"
        >
          <ReusableButton
            style={{
              marginTop: "15px",
              // width: { xs: "40%", md: "14%" },
            }}
            buttonName="Submit"
            size="Medium"
            className="addToCart_button"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
