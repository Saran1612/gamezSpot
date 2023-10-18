import React from "react";
import "./CartItems.css";
import { Box, IconButton } from "@mui/material";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { DataTable } from "../../Components/DataTable/DataTable";
import ReusableButton from "../../Components/Button/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ProdOne from "../../assests/Group 1000002799.png";
import CloseIcon from "@mui/icons-material/Close";
import { AuthContext } from "../../Components/useContext/useContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const CartItems = () => {
  const { data, setData, count, setCount, setFilteredData } =
    useContext(AuthContext);
  const [cartData, setCartData] = useState([]);

  const uniqueIds = {};
  const filteredData = data.filter((item) => {
    if (!uniqueIds[item.id]) {
      uniqueIds[item.id] = true;
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (filteredData.length > 0) {
      const formattedData = filteredData.map((each) => ({
        id: each.id,
        productImg: each.img,
        productName: each.name,
        unitPrice: each.price,
        Quantity: each?.quantity,
        discountPrice: each.price,
        stockStatus: "Active",
      }));
      setCartData(formattedData);
    }
  }, []);

  const handleDelete = (id) => {
    console.log("Deleting product with id:", id);
    const updatedData = filteredData.filter((item) => item.id !== id);
    console.log("Updated filteredData:", updatedData);
  
    const formattedData = updatedData.map((each) => ({
      id: each.id,
      productImg: each.img,
      productName: each.name,
      originalPrice: each.price,
      Quantity: each?.quantity,
      discountPrice: each.price,
    }));
  
    setData(updatedData);
    setCartData(formattedData); // Update cartData state with formatted data
  };
  console.log(cartData,"cartData")

  const rows = [
    {
      id: 1,
      // productImg: "Snow",
      productName: "D-Phone Android",
      unitPrice: "$120.00",
      stockStatus: "In Stock",
    },
    {
      id: 2,
      // productImg: "Lannister",
      productName: "Digital Lens Camera",
      unitPrice: "$120.00",
      stockStatus: "In Stock",
    },
    {
      id: 3,
      // productImg: "Lannister",
      productName: "Headphone Supersonic",
      unitPrice: "$120.00",
      stockStatus: "In Stock",
    },
  ];

  const column = [
    {
      field: "productDelete",
      headerName: "",
      flex: 1,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <>
          <span className="delete-button">
            <IconButton aria-label="delete" size="small">
              <CloseIcon
                color="primary"
                fontSize="inherit"
                style={{
                  color: "#fff",
                }}
                onClick={() => handleDelete(params.row.id)}
              />
            </IconButton>
          </span>
        </>
      ),
    },
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
      headerName: "PRODUCT",
      flex: 1,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      sortable: false,
    },
    {
      field: "unitPrice",
      headerName: "UNIT PRICE",
      flex: 1,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      sortable: false,
    },
    {
      field: "stockStatus",
      headerName: "STOCK STATUS",
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
      flex: 1,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box className="table-action">
          <ReusableButton
            buttonName="Apply Coupon"
            size="large"
            className="coupon_button"
          // onClick={handleLoginClick}
          />
        </Box>
      ),
    },
  ];

  return (
    <Box className="cart-bg_img">
      <Box>{/* <Header /> */}</Box>

      <Box
        sx={{
          margin: "30px 0px",
          padding: { xs: "25px 50px 20px 40px", md: "50px 100px 40px 80px" },
        }}
      >
        <DataTable
          disableColumnMenu={true}
          sx={{
            marginLeft: "12px",
            marginRight: "12px",
          }}
          className="cart_table"
          rows={cartData}
          columns={column}
          autoHeight
          rowHeight={100}
          pageSize={5}
          rowsPerPageOptions={[5]}
          hideFooterSelectedRowCount={false}
          hideFooterPagination={false}
          hideFooter={false}
        />
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default CartItems;
