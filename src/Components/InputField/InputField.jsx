import React from "react";
import { TextField } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

export const InputField = ({
  onChange,
  type,
  className,
  placeholder,
  size,
  value,
  style,
  id,
  variant,
  label,
  name,
  required,
  error,
  helperText,
  disabled,
  rows,
  multiline,
  InputProps,
}) => {
  return (
    <>
      <TextField
        type={type}
        style={style}
        id={id}
        variant={variant}
        label={label}
        value={value}
        name={name}
        disabled={disabled}
        className={`${className}`}
        required={required}
        onChange={onChange}
        size={size}
        error={error}
        helperText={helperText}
        placeholder={placeholder}
        InputProps={InputProps}
        rows={rows}
        multiline={multiline}
        autoComplete="off"
      ></TextField>
    </>
  );
};
