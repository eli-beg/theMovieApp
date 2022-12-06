import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Source Sans Pro",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          //este de abajo me colorea el borde del input
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
              borderRadius: "30px",
            },
            "&:hover fieldset": {
              borderColor: "white",
              borderWidth: "0.1rem",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiInputBase-root": {
            "& input": {
              color: "white",
            },
          },
        },
      },
    },
  },
});

export default theme;
