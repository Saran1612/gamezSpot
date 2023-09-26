import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";
// const styles = makeStyles((theme) => ({
//   main: {
//     //   '& .MuiInputLabel-formControl': {
//     //  top:"-8px"
//     //   },
//     "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
//       transform: "translate(14px, -6px) scale(0.75)",
//     },

//     "& .MuiInputLabel-outlined": {
//       transform: "translate(14px,10px) scale(1)",
//     },
//   },
// }));

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
        >
          <em
            style={{
              color: "#a2a2a2",
              fontWeight: "100",
              fontFamily: "sans-serif",
              fontStyle: "initial",
            }}
          >
            {spanText}
          </em>
          {/* <span style={{opacity:"0.5"}}>{spanText}</span> */}
        </MenuItem>

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
