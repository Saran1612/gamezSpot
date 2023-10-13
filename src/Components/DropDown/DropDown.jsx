import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
export default function ResuableDropdown(props) {
  const {
    name,
    label,
    value,
    style,
    size,
    onChange,
    placeholder,
    options,
    // displayEmpty,
    disabled,
    MenuProps,
    error,
    helperText,
    spanText,
    className,
  } = props;
  // const classes = MenuProps ? MenuProps() : styles();

  return (
    <FormControl variant="outlined" fullWidth className={className}>
      <InputLabel>{label} </InputLabel>
      <Select
        label={label}
        name={name}
        value={value}
        size={size}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        style={style}
        error={error}
        helperText={helperText}
        defaultValue="none"
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem
          value=""
          sx={{ opacity: "0.5" }}
          selected
          hidden
          disabled="disabled"
        ></MenuItem>

        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            <span style={{ textTransform: "capitalize" }}>
              {item.full_name}
            </span>{" "}
            {item.title}
          </MenuItem>
        ))}
      </Select>
      {error && (
        <FormHelperText style={{ color: "red" }}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}
