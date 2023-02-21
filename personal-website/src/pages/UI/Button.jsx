import React from "react";
import MuiButton from "@mui/material/Button";
import { styled } from "@mui/system";

const StyledMuiButton = styled(MuiButton)(() => ({
  color: "var(--secondary)",
  borderColor: "var(--secondary)",
  "&:hover": {
    borderColor: "var(--secondary)",
  },
}));

function Button({ text }) {
  return <StyledMuiButton variant="outlined">{text}</StyledMuiButton>;
}

export default Button;
