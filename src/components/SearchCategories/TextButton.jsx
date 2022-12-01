import { Button, styled } from "@mui/material";

const TextButton = styled(Button)({
  textTransform: "none",
  fontSize: 16,
  padding: 10,
  borderRadius: "0px",
  justifyContent: "space-between",
  fontFamily: ["Source Sans Pro"].join(","),
  "&:hover": {
    backgroundColor: "#cfd8dc",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
  fontWeight: "600",
});

export default TextButton;
