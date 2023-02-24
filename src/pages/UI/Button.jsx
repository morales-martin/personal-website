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

function Button({ text, href = "", target = "_blank", download = false }) {
  return (
    <StyledMuiButton
      variant="outlined"
      href={href}
      target={target}
      download={download}
    >
      {text}
    </StyledMuiButton>
  );
}

export default Button;
