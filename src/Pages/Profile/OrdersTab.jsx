import React from "react";
import { Box } from "@mui/material";
import { DataTable } from "../../Components/DataTable/DataTable";

const OrdersTab = () => {
  const columns = [
    {
      field: "Orderid",
      headerName: "Order id",
      flex: 1,
      headerAlign: "left",
      align: "left",
      headerClassName: "orderId-header",
      cellClassName: "OrderId",
    },
    {
      field: "ProductTitle",
      headerName: "Product Title",
      flex: 1,
      headerAlign: "left",
      align: "left",
      headerClassName: "orderId-header",
    },
    {
      field: "Status",
      headerName: "Status",
      flex: 1,
      headerAlign: "left",
      align: "left",
      headerClassName: "orderId-header",
    },
  ];

  const rows = [
    {
      id: 1,
      Orderid: "#2254",
      ProductTitle: "Play Station",
      Status: "Pending",
      loanOrigination: "11/10/2023",
      lastPayment: "08/10/2023",
    },
    {
      id: 2,
      Orderid: "#2254",
      ProductTitle: "Xbox",
      Status: "Cancel",
      loanOrigination: "11/10/2023",
      lastPayment: "08/10/2023",
    },
    {
      id: 3,
      Orderid: "#2254",
      ProductTitle: "Gaming Headset",
      Status: "Delivered",
      loanOrigination: "11/10/2023",
      lastPayment: "08/10/2023",
    },
    {
      id: 4,
      Orderid: "#2254",
      ProductTitle: "Xbox",
      Status: "Pending",
      loanOrigination: "11/10/2023",
      lastPayment: "08/10/2023",
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <DataTable
        rows={rows}
        columns={columns}
        pageSize={10}
        rowHeight={50}
        autoHeight={true}
        className="orders-table"
        hideFooter={true}
        hideFooterPagination={true}
        hideFooterSelectedRowCount={true}
        getCellClassName={(params) => {
          console.log(params, "params");
          if (params.value === "Pending") {
            return `class${params.value}`;
          } else if (params.value === "Delivered") {
            return `class${params.value}`;
          } else if (params.value === "Cancel") {
            return `class${params.value}`;
          }
          return "";
        }}
      />
    </Box>
  );
};

export default OrdersTab;
