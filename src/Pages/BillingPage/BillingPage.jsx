import React from "react";
import "./BillingPage.css";
import { Box, Grid, Link, Stack } from "@mui/material";
import SnackbarContent from "@mui/material/SnackbarContent";
import { InputField } from "../../Components/InputField/InputField";
import ReusableButton from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Footer from "../../Components/Footer/Footer";

const BillingPage = () => {
  return (
    <Box className="billing-bg_img">
      <Box>
        <Header />
      </Box>

      <Box
        sx={{
          padding: { xs: "25px 50px 20px 40px", md: "50px 100px 40px 80px" },
        }}
      >
        <Stack spacing={2} sx={{ width: "100%", marginBottom: "20px" }}>
          <SnackbarContent
            message={
              <span>
                Have a coupon? <span>Click here to enter your code</span>
              </span>
            }
            sx={{ background: "#171616" }}
          />
        </Stack>

        <Box className="couple_container">
          <span className="coupon_text">
            If you have a coupon code, please apply it below.
          </span>

          <InputField
            id="input-with-icon-textfield"
            variant="standard"
            placeholder="Coupon Code"
            className="billing_inputFields"
          />

          <ReusableButton
            buttonName="Apply Coupon"
            size="large"
            className="applyCoupon_button"
          />
        </Box>

        <Box sx={{ marginTop: "45px" }} className="">
          <Grid container spacing={8}>
            <Grid item xs={12} md={7}>
              <Box>
                <span className="billing-details_text">Billing Details</span>
                <Box sx={{ marginTop: "20px" }}>
                  <span className="billing-label_text">First name*</span>
                  <InputField
                    id="input-with-icon-textfield"
                    variant="standard"
                    placeholder="First name"
                    className="billing-form_inputFields"
                  />
                </Box>

                <Box sx={{ marginTop: "16px" }}>
                  <span className="billing-label_text">Last name*</span>
                  <InputField
                    id="input-with-icon-textfield"
                    variant="standard"
                    placeholder="Last name"
                    className="billing-form_inputFields"
                  />
                </Box>

                <Box sx={{ marginTop: "16px" }}>
                  <span className="billing-label_text">
                    Company name (optional)*
                  </span>
                  <InputField
                    id="input-with-icon-textfield"
                    variant="standard"
                    placeholder="Company name"
                    className="billing-form_inputFields"
                  />
                </Box>

                <Box sx={{ marginTop: "16px" }}>
                  <span className="billing-label_text">Country / Region*</span>
                  <InputField
                    id="input-with-icon-textfield"
                    variant="standard"
                    placeholder="Country / Region"
                    className="billing-form_inputFields"
                  />
                </Box>

                <Box sx={{ marginTop: "16px" }}>
                  <span className="billing-label_text">Street Address*</span>
                  <InputField
                    id="input-with-icon-textfield"
                    variant="standard"
                    placeholder="Street Address"
                    className="billing-form_inputFields"
                  />

                  <InputField
                    id="input-with-icon-textfield"
                    variant="standard"
                    placeholder="Coupon Code"
                    className="billing-form_inputFields"
                  />
                </Box>

                <Box sx={{ marginTop: "16px" }}>
                  <span className="billing-label_text">
                    Company name (optional)*
                  </span>
                  <InputField
                    id="input-with-icon-textfield"
                    variant="standard"
                    placeholder="Company name"
                    className="billing-form_inputFields"
                  />
                </Box>

                <Box sx={{ marginTop: "16px" }}>
                  <span className="billing-label_text">District*</span>
                  <InputField
                    id="input-with-icon-textfield"
                    variant="standard"
                    placeholder="District"
                    className="billing-form_inputFields"
                  />
                </Box>

                <Box sx={{ marginTop: "16px" }}>
                  <span className="billing-label_text">
                    Postcode / ZIP ( optional )*
                  </span>
                  <InputField
                    type="number"
                    id="input-with-icon-textfield"
                    variant="standard"
                    placeholder="Postcode / ZIP"
                    className="billing-form_inputFields"
                  />
                </Box>

                <Box sx={{ marginTop: "16px" }}>
                  <span className="billing-label_text">Phone*</span>
                  <InputField
                    type="number"
                    id="input-with-icon-textfield"
                    variant="standard"
                    placeholder="Phone"
                    className="billing-form_inputFields"
                  />
                </Box>

                <Box sx={{ marginTop: "16px" }}>
                  <span className="billing-label_text">Email Address*</span>
                  <InputField
                    type="email"
                    id="input-with-icon-textfield"
                    variant="standard"
                    placeholder="Email Address"
                    className="billing-form_inputFields"
                  />
                </Box>

                <Box sx={{ marginTop: "16px" }}>
                  <span className="billing-label_text">
                    Other Notes ( Optional )
                  </span>
                  <InputField
                    id="input-with-icon-textfield"
                    variant="standard"
                    placeholder="Other Notes"
                    className="billing-form_inputFields"
                    multiline={true}
                    rows={4}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box>
                <span className="billing-details_text">Your Order</span>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "25px",
                  }}
                >
                  <span className="billing-product_text">PRODUCT</span>
                  <span className="billing-product_text">SUBTOTAL</span>
                </Box>

                <hr style={{ margin: "20px 0px" }} />

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px 0px",
                    }}
                  >
                    <span className="product-details_text">
                      Digital Lens Camera * 4
                    </span>
                    <span className="product-details_text-red">$140.00</span>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px 0px",
                    }}
                  >
                    <span className="product-details_text">
                      Headphone Supersonic * 1
                    </span>
                    <span className="product-details_text-red">$140.00</span>
                  </Box>
                </Box>

                <hr style={{ margin: "20px 0px", color: "#B0B0B0" }} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "15px 0px",
                  }}
                >
                  <span className="product-details_text">Subtotal</span>
                  <span className="product-details_text-red">$617.59</span>
                </Box>

                <hr style={{ margin: "20px 0px", color: "#B0B0B0" }} />

                <Box>
                  <span className="shipping_text">Shipping</span>
                </Box>

                <Box
                  sx={{ marginTop: "10px" }}
                  className="shipping-radio_buttons"
                >
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Free shipping"
                        size="small"
                        control={<Radio />}
                        label="Free shipping"
                      />
                      <FormControlLabel
                        value="Flat rate : $100.00"
                        size="small"
                        control={<Radio />}
                        label="Flat rate : $100.00"
                      />
                      <FormControlLabel
                        value="Local pickup : $120.00"
                        size="small"
                        control={<Radio />}
                        label="Local pickup : $120.00"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>

                <hr style={{ margin: "20px 0px", color: "#B0B0B0" }} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "15px 0px",
                  }}
                >
                  <span className="product-details_text">Total</span>
                  <span className="product-details_text-red">$617.59</span>
                </Box>

                <hr style={{ margin: "20px 0px", color: "#B0B0B0" }} />

                <Box
                  sx={{ marginTop: "10px" }}
                  className="shipping-radio_buttons"
                >
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Direct Bank Transfer"
                        size="small"
                        className="direct-bank_label"
                        control={<Radio />}
                        label={
                          <Box
                            sx={{ display: "flex", flexDirection: "column" }}
                          >
                            <span className="directBank_text">
                              Direct Bank Transfer
                            </span>{" "}
                            <span className="directBank_subtext">
                              Make your payment directly into our bank account.
                              Please use your order ID as the payment reference.
                              Your order will not be shipped until the funds
                              have cleared in our account
                            </span>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        value="Check payments"
                        size="small"
                        control={<Radio />}
                        label="Check payments"
                      />
                      <FormControlLabel
                        value="Cash on delivery"
                        size="small"
                        control={<Radio />}
                        label="Cash on delivery"
                      />

                      <FormControlLabel
                        value="Paypal"
                        size="small"
                        control={<Radio />}
                        label="Paypal"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>

                <hr style={{ margin: "20px 0px", color: "#B0B0B0" }} />

                <Box className="privacy-container">
                  <span className="privacy_text">
                    Your personal data will be used to process your order,
                    support your experience throughout this website and for
                    other purposes described in our{" "}
                    <Link href="#" className="privacy_text-anchor">
                      privacy policy
                    </Link>
                  </span>
                </Box>

                <Box className="placeOrder-container">
                  <ReusableButton
                    buttonName="PLACE ORDER"
                    size="medium"
                    className="placeOrder_button"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default BillingPage;
