import type {} from "@mui/lab/themeAugmentation";
import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          backgroundColor: "#F25F5C",
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: "#70C1B3",
        },
      },
    },
  },
});

export default theme;
