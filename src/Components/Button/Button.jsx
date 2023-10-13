import React from "react";
import Button from "@mui/material/Button";
const ReusableButton = ({
  size,
  style,
  variant,
  maxWidth,
  fullWidth,
  onClick,
  type,
  className,
  buttonName,
  startIcon,
  endIcon,
  disabled,
  href,
}) => {
  return (
    <>
      <Button
        size={size}
        style={style}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        variant={variant}
        onClick={onClick}
        type={type}
        className={`${className}`}
        startIcon={startIcon}
        disabled={disabled}
        endIcon={endIcon}
        href={href}
      >
        {buttonName}
      </Button>
    </>
  );
};

export default ReusableButton;
