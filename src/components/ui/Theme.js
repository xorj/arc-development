import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0b72b9";
const arcOrange = "#ffba60";
const arcGray = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "white",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: "300",
      color: arcGray,
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: "300",
      color: "white",
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGray,
      fontWeight: 300,
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.7rem",
      color: arcBlue,
      fontWeight: 700,
    },
  },
});
