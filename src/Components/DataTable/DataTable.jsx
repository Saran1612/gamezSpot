import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export const DataTable = ({
  rows,
  columns,
  pageSize,
  className,
  autoHeight,
  hideFooter,
  sx,
  rowHeight,
  hideFooterPagination,
  hideFooterSelectedRowCount,
  rowsPerPageOptions,
  getRowClassName,
  disableColumnMenu,
}) => {
  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        autoHeight={autoHeight}
        rowHeight={rowHeight}
        rowsPerPageOptions={rowsPerPageOptions}
        sx={sx}
        getRowClassName={getRowClassName}
        disableColumnMenu={disableColumnMenu}
        className={`${className}`}
        hideFooter={hideFooter}
        hideFooterPagination={hideFooterPagination}
        hideFooterSelectedRowCount={hideFooterSelectedRowCount}
      />
    </>
  );
};
