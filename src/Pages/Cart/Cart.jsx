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
import { useNavigate } from "react-router";
import { AuthContext } from "../../Components/useContext/useContext";
import { useContext } from "react";
import { useEffect } from "react";
import { Triangle } from "react-loader-spinner";

const Cart = () => {
  const { data, setData, count, setCount, setCartedData } =
    useContext(AuthContext);
  const [cartData, setCartData] = useState([]);
  const [stopped, setStopped] = useState(false);

  const uniqueIds = {};
  const filteredData = data.filter((item) => {
    if (!uniqueIds[item.id]) {
      uniqueIds[item.id] = true;
      return true;
    }
    return false;
  });

  console.log(data, "datadata");

  const getTotalPrice = (data) => {
    console.log(data, "ingrandtotal");
    let countValue = 0;
    data.forEach((item) => {
      const quantity = item.Quantity !== undefined ? Number(item.Quantity) : 1;
      const price =
        item.originalPrice !== undefined ? Number(item.originalPrice) : 0;
      countValue += quantity * price;
    });
    console.log(countValue, "sduhdjdsndsn");
    setCount(countValue);
    return `Rs.${countValue}`;
  };

  useEffect(() => {
    if (filteredData.length > 0) {
      const formattedData = filteredData.map((each) => ({
        id: each.id,
        productImg: each?.img ? each.img : each.productImg,
        productName: each?.name ? each.name : each.productName,
        originalPrice: each?.price ? each.price : each.originalPrice,
        Quantity: each?.quantity ? each.quantity : each.Quantity,
        discountPrice: each?.price ? each.price : each.discountPrice,
      }));
      setCartData(formattedData);
    }
  }, []);

  useEffect(() => {
    //loader
    setStopped(true);
    const interval = setInterval(() => {
      setStopped(false);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  console.log(cartData, "cartData");

  const handleDelete = (id) => {
    console.log("Deleting product with id:", id);
    const updatedData = filteredData.filter((item) => item.id !== id);
    console.log("Updated filteredData:", updatedData);

    const formattedData = updatedData.map((each) => ({
      id: each.id,
      productImg: each?.img ? each.img : each.productImg,
      productName: each?.name ? each.name : each.productName,
      originalPrice: each?.price ? each.price : each.originalPrice,
      Quantity: each?.quantity ? each.quantity : each.Quantity,
      discountPrice: each?.price ? each.price : each.discountPrice,
    }));

    setData(updatedData);
    setCartData(formattedData);
  };

  // const rows = [
  //   {
  //     id: 1,
  //     productImg: "Snow",
  //     productName: "Electrobot Xtreme Gaming 2023",
  //     originalPrice: "Rs.35.00",
  //     discountPrice: "Rs.35.00",
  //   },
  //   {
  //     id: 2,
  //     productImg: "Lannister",
  //     productName: "Electrobot Xtreme Gaming 2023",
  //     originalPrice: "Rs.42.00",
  //     discountPrice: "Rs.42.00",
  //   },
  //   {
  //     id: 3,
  //     productImg: "Lannister",
  //     productName: "Electrobot Xtreme Gaming 2023",
  //     originalPrice: "Rs.45.00",
  //     discountPrice: "Rs.45.00",
  //   },
  //   {
  //     id: 4,
  //     productImg: "Stark",
  //     productName: "Electrobot Xtreme Gaming 2023",
  //     originalPrice: "Rs.16.00",
  //     discountPrice: "Rs.16.00",
  //   },
  // ];

  const handleQuantityChange = (id, value) => {
    // console.log(id, value, "quantity");
    const updatedData = filteredData.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: value };
      }
      return item;
    });
    console.log(updatedData, "updatedDataquNTITJ");

    const formattedCartData = updatedData.map((each) => ({
      id: each.id,
      productImg: each?.img ? each.img : each.productImg,
      productName: each?.name ? each.name : each.productName,
      originalPrice: each?.price ? each.price : each.originalPrice,
      Quantity: each?.quantity ? each.quantity : each.Quantity,
      discountPrice: each?.price ? each.price : each.discountPrice,
    }));
    console.log(formattedCartData, "formattedCartDataformattedCartData");
    setCartData(formattedCartData);
    setData(formattedCartData);
  };

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
            <img
              src={params.row.productImg}
              alt="CartImg"
              width="100%"
              height="74"
            />
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
      headerName: "ORIGINAL PRICE",
      flex: 1,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      sortable: false,
    },
    {
      field: "Quantity",
      headerName: "QTY",
      // flex: 3,
      width: 160,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      sortable: false,
      renderCell: (params) => (
        <>
          <div
            className="quality-picker_container"
            sx={{
              "@media (max-width: 600px)": {
                display: "block",
                textAlign: "center",
              },
            }}
          >
            <QuantityPicker
              min={1}
              max={5}
              onChange={(value) => handleQuantityChange(params.row.id, value)}
              smooth
              value={
                params.row?.quantity
                  ? params.row.quantity
                  : params.row.Quantity === undefined
                  ? 1
                  : params.row.Quantity
              } // Assuming params.row.Quantity is the initial value
              className="quality_picker"
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
                onClick={() => handleDelete(params.row.id)}
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

  const navigate = useNavigate();

  return (
    <Box className="cart-bg_img">
      {stopped === true ? (
        <Box
          sx={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
          }}
        >
          <Triangle
            height="60"
            width="60"
            color="#ffffff"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </Box>
      ) : (
        <>
          <Box
            sx={{
              padding: {
                xs: "15px 20px 10px 20px",
                md: "50px 100px 40px 80px",
              },
            }}
          >
            <Box>
              <span className="cart-title_text">Your Cart Items</span>
            </Box>

            <Box sx={{ margin: "30px 0px" }}>
              <DataTable
                // disableColumnMenu={true}
                sx={{
                  width: "100%",
                  marginLeft: "12px",
                  marginRight: "12px",
                }}
                className="cart_table"
                rows={cartData}
                columns={column}
                autoHeight
                rowHeight={110}
                pageSize={5}
                rowsPerPageOptions={[5]}
                hideFooterSelectedRowCount={false}
                hideFooterPagination={false}
                hideFooter={false}
              />
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: { xs: "center", sm: "center", md: "end" },
              }}
              className="shopping-button_container"
            >
              <ReusableButton
                buttonName="Continue Shopping"
                size="large"
                className="shopping_button"
                onClick={() => navigate("/home/products")}
              />
            </Box>

            <Box sx={{ padding: "30px 0px" }}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
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
                        <span className="details-text">
                          * Zip / Postal code
                        </span>

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

                <Grid item xs={12} sm={6} md={4}>
                  <Box>
                    <Box sx={{}}>
                      <Box>
                        <span className="shipping-tax_text">
                          Use Coupon Code
                        </span>
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

                <Grid item xs={12} sm={6} md={4}>
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
                      <span className="cart-price_text">Rs.260.20</span>
                    </Box>

                    <hr
                      style={{ color: "#2D2D2D", border: "1px solid #2D2D2D" }}
                    />
                    <Box sx={{ margin: "30px 0px 0px 0px" }}>
                      <span className="total-shipping_text">
                        Total Shipping
                      </span>
                      <Box sx={{ margin: "10px 0px 0px 0px" }}>
                        <FormGroup>
                          <Box className="cart-checkbox_box">
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Standard"
                              className="cart_checkbox"
                            />
                            <span className="cart-price_text">Rs.20.00</span>
                          </Box>

                          <Box className="cart-checkbox_box">
                            <FormControlLabel
                              required
                              control={<Checkbox />}
                              label="Express"
                              className="cart_checkbox"
                            />

                            <span className="cart-price_text">Rs.20.00</span>
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
                        <span className="total-price_text">
                          {getTotalPrice(cartData)}
                        </span>
                      </Box>

                      <ReusableButton
                        buttonName="PROCEED TO CHECKOUT"
                        size="large"
                        className="proceed_button"
                        onClick={() => navigate("/home/billing")}
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
        </>
      )}
    </Box>
  );
};

export default Cart;
