import React, { forwardRef } from "react";
import { InputLabel, MenuItem, Select as MuiSelect } from "@material-ui/core";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { withStyles } from "@material-ui/core/styles";

const Select = styled(MuiSelect)(spacing);

const StyledSelectField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& input": {
        backgroundColor: "#f6f6f7",
        borderRadius: "2px",
        fontSize: "14px",
        fontWeight: "normal",
        letterSpacing: "-0.35px",
        textAlign: "left",
        color: "#0f1923",
        fontFamily: "Inter",
      },
      "& fieldset": {
        borderRadius: 0,
      },
      "&.Mui-focused fieldset": {
        border: "unset !important",
      },
    },
  },
})(Select);

const CustomSelect = forwardRef(
  (
    {
      name,
      label = "Select",
      value,
      errors = {},
      touched = {},
      onChange,
      onBlur,

      fullWidth = true,
      variant = "outlined",
      options = [],
    },
    ref
  ) => (
    <React.Fragment>
      <InputLabel id={`${name}-label}`}>{label}</InputLabel>
      <StyledSelectField
        id={name}
        labelId={`${name}-label}`}
        name={name}
        value={value}
        fullWidth={fullWidth}
        onBlur={onBlur}
        onChange={onChange}
        className="custom-text-field"
        variant={variant}
      >
        <MenuItem value="All">All</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.text}
          </MenuItem>
        ))}
      </StyledSelectField>
    </React.Fragment>
  )
);
export default CustomSelect;
