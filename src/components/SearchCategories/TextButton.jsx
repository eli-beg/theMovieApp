import { Button, styled } from "@mui/material";

const TextButton = styled(Button)({
  textTransform: "none",
  fontSize: 16,
  padding: 10,
  borderRadius: "0px",
  justifyContent: "space-between",
  fontFamily: ["Source Sans Pro"].join(","),
  "&:hover": {
    backgroundColor: "#eceff1",
  },

  "&:focus": {
    boxShadow: "#cfd8dc",
  },
  fontWeight: "600",
});

export default TextButton;
