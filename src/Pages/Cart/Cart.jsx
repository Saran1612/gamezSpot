import React, { useState } from "react";
import "./Cart.css";
import { Box, Grid, IconButton, InputAdornment } from "@mui/material";
import Header from "../../Components/Header/Header";
import { DataTable } from "../../Components/DataTable/DataTable";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CartImg from "../../assests/Mask group (1).svg";
import { QuantityPicker } from "react-qty-picker";
import ReusableButton from "../../Components/Button/Button";
import ResuableDropdown from "../../Components/DropDown/DropDown";
import { InputField } from "../../Components/InputField/InputField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Footer from "../../Components/Footer/Footer";

const Cart = () => {
  const { clickedValue, setClickedValue } = useState([]);
  const handleDelete = () => {};

  const handleQuantityChange = (index, value) => {
    // const updatedClickedValue = [...clickedValue];
    // updatedClickedValue[index].quantity = value !== 0 ? value : 1;
    // setClickedValue(updatedClickedValue);
    // console.log(updatedClickedValue, "updatedClickedValue");
  };

  const rows = [
    {
      id: 1,
      // productImg: "Snow",
      productName: "Electrobot Xtreme Gaming 2023",
      originalPrice: "$35.00",
      discountPrice: "$35.00",
    },
    {
      id: 2,
      // productImg: "Lannister",
      productName: "Electrobot Xtreme Gaming 2023",
      originalPrice: "$42.00",
      discountPrice: "$42.00",
    },
    {
      id: 3,
      // productImg: "Lannister",
      productName: "Electrobot Xtreme Gaming 2023",
      originalPrice: "$45.00",
      discountPrice: "$45.00",
    },
    {
      id: 4,
      // productImg: "Stark",
      productName: "Electrobot Xtreme Gaming 2023",
      originalPrice: "$16.00",
      discountPrice: "$16.00",
    },
  ];

  const column = [
    {
      field: "productImg",
      headerName: "",
      flex: 1,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <>
          <span className="delete-button">
            <img src={CartImg} alt="CartImg" width="104" height="74" />
          </span>
        </>
      ),
    },
    {
      field: "productName",
      headerName: "PRODUCT NAME",
      flex: 1,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      sortable: false,
    },
    {
      field: "originalPrice",
      headerName: "Original Price",
      flex: 1,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      sortable: false,
    },
    {
      field: "Quantity",
      headerName: "QTY",
      flex: 1,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      sortable: false,
      renderCell: (params) => (
        <>
          <div className="quality-picker_container">
            <QuantityPicker
              min={1}
              max={5}
              onChange={(value) => handleQuantityChange(params.row.id, value)}
              smooth
              value={1}
              class="quality_picker"
            />
          </div>
        </>
      ),
    },
    {
      field: "discountPrice",
      headerName: "DISCOUNT PRICE",
      flex: 1,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      sortable: false,
    },
    {
      field: "actions",
      type: "Actions",
      headerName: "",
      width: 20,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <>
          <span className="delete-button">
            <IconButton aria-label="delete" size="small">
              <DeleteOutlineIcon
                color="primary"
                fontSize="inherit"
                style={{
                  color: "#fff !important",
                }}
                onClick={() => handleDelete}
              />
            </IconButton>
          </span>
        </>
      ),
    },
  ];

  const Cart = [
    { id: "JAPAN", full_name: "Japan" },
    { id: "INDIA", full_name: "India" },
    { id: "AMERICA", full_name: "America" },
  ];

  return (
    <Box className="cart-bg_img">
      <Box>
        <Header />
      </Box>

      <Box sx={{ padding: "40px 100px 40px 80px" }}>
        <Box>
          <span className="cart-title_text">Your Cart Items</span>
        </Box>

        <Box sx={{ margin: "30px 0px" }}>
          <DataTable
            disableColumnMenu={true}
            sx={{
              width: "100%",
              marginLeft: "12px",
              marginRight: "12px",
            }}
            className="cart_table"
            rows={rows}
            columns={column}
            autoHeight
            rowHeight={110}
            pageSize={5}
            rowsPerPageOptions={[5]}
            hideFooterSelectedRowCount={true}
            hideFooterPagination={true}
            hideFooter={true}
          />
        </Box>

        <Box sx={{ width: "100%" }} className="shopping-button_container">
          <ReusableButton
            buttonName="Continue Shopping"
            size="large"
            className="shopping_button"
          />
        </Box>

        <Box sx={{ padding: "30px 0px" }}>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Box>
                <Box sx={{}}>
                  <span className="shipping-tax_text hr-lines">
                    Estimate Shipping And Tax
                  </span>
                </Box>

                <Box sx={{ margin: "20px 0px 0px 0px" }}>
                  <span className="estimate_text">
                    Enter your destination to get a shipping estimate.
                  </span>

                  <Box sx={{ margin: "28px 0px" }}>
                    <span className="details-text">* Country</span>

                    <Box sx={{ marginTop: "14px" }}>
                      <ResuableDropdown
                        size="small"
                        type="text"
                        optionText="Select Recruiter"
                        spanText="Select Recruiter designation"
                        style={{ width: "100%" }}
                        name="RecruitersDesignation"
                        options={Cart}
                        className="details_select"
                        // onChange={handleInputChangeDropdown}
                      />
                    </Box>
                  </Box>

                  <Box sx={{ margin: "24px 0px" }}>
                    <span className="details-text">* Region / State</span>

                    <Box sx={{ marginTop: "14px" }}>
                      <ResuableDropdown
                        size="small"
                        type="text"
                        optionText="Select Recruiter"
                        spanText="Select Recruiter designation"
                        style={{ width: "100%" }}
                        name="RecruitersDesignation"
                        options={Cart}
                        className="details_select"
                        // onChange={handleInputChangeDropdown}
                      />
                    </Box>
                  </Box>

                  <Box sx={{ margin: "24px 0px" }}>
                    <span className="details-text">* Zip / Postal code</span>

                    <Box sx={{ marginTop: "14px" }}>
                      <InputField
                        id="input-with-icon-textfield"
                        className="postal-code_fields"
                        size="small"
                      />
                    </Box>
                  </Box>

                  <Box className="quote-button_container">
                    <ReusableButton
                      buttonName="Get Quote"
                      size="large"
                      className="quote_button"
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box>
                <Box sx={{}}>
                  <Box>
                    <span className="shipping-tax_text">Use Coupon Code</span>
                  </Box>

                  <Box sx={{ margin: "20px 0px 0px 0px" }}>
                    <span className="estimate_text">
                      Enter your destination to get a shipping estimate.
                    </span>
                  </Box>

                  <Box sx={{ marginTop: "14px" }}>
                    <InputField
                      id="input-with-icon-textfield"
                      className="postal-code_fields"
                      size="small"
                    />
                  </Box>
                </Box>

                <Box className="quote-button_container">
                  <ReusableButton
                    buttonName="APPLY COUPON"
                    size="large"
                    className="quote_button"
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box
                sx={{
                  border: "1px solid #2D2D2D",
                  padding: "20px",
                  borderRadius: "4px",
                }}
              >
                <Box>
                  <span className="shipping-tax_text">Cart Total</span>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "25px 0px",
                  }}
                >
                  <span className="total-product-text">Total Products</span>
                  <span className="cart-price_text">$260.20</span>
                </Box>

                <hr style={{ color: "#2D2D2D", border: "1px solid #2D2D2D" }} />
                <Box sx={{ margin: "30px 0px 0px 0px" }}>
                  <span className="total-shipping_text">Total Shipping</span>
                  <Box sx={{ margin: "10px 0px 0px 0px" }}>
                    <FormGroup>
                      <Box className="cart-checkbox_box">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Standard"
                          className="cart_checkbox"
                        />
                        <span className="cart-price_text">$20.00</span>
                      </Box>

                      <Box className="cart-checkbox_box">
                        <FormControlLabel
                          required
                          control={<Checkbox />}
                          label="Express"
                          className="cart_checkbox"
                        />

                        <span className="cart-price_text">$20.00</span>
                      </Box>
                    </FormGroup>
                  </Box>
                </Box>

                <hr
                  style={{
                    margin: "25px 0px",
                    color: "#2D2D2D",
                    border: "1px solid #2D2D2D",
                  }}
                />

                <Box
                  sx={{
                    margin: "30px 0px",
                  }}
                  className="proceed-checkout_container"
                >
                  <Box
                    sx={{
                      margin: "0px 0px 40px 0px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span className="total-shipping_text">Grand Total</span>
                    <span className="total-price_text">$260.20</span>
                  </Box>

                  <ReusableButton
                    buttonName="PROCEED TO CHECKOUT"
                    size="large"
                    className="proceed_button"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box>
        <Footer/>
      </Box>
    </Box>
  );
};

export default Cart;
