import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
    marginTop: "auto",
    boxSizing: "border-box"

  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "2em",
  },
  icon: {
    height: "4em",
    width: "4em",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
        height: "2.5em",
        width: "2.5em",
    }
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
        right: "2em",
        marginTop: "-3.7em",

    }
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/"
                onClick={() => props.setValue("/")}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/services"
                onClick={() => props.setValue("/services")}
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/customsoftwares"
                onClick={() => props.setValue("/services")}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/mobileapps"
                onClick={() => props.setValue("/services")}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/websites"
                onClick={() => props.setValue("/services")}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => props.setValue("/revolution")}
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => props.setValue("/revolution")}
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => props.setValue("/revolution")}
              >
                Tecnology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => props.setValue("/revolution")}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => props.setValue("/about")}
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => props.setValue("/about")}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => props.setValue("/about")}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column">
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/contact"
                onClick={() => props.setValue("/contact")}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        className={classes.adornment}
        alt="black decorative slash"
        src={footerAdornment}
      ></img>
      <Grid justify="flex-end" align="flex-start" spacing={2} container className={classes.socialContainer}>
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener roreferrer"
          target="_blank"
        >
          <img
            alt="facebook logo"
            src={facebook}
            className={classes.icon}
          ></img>
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener roreferrer"
          target="_blank"
        >
          <img alt="twitter logo" src={twitter} className={classes.icon}></img>
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener roreferrer"
          target="_blank"
        >
          <img
            alt="instragram logo"
            src={instagram}
            className={classes.icon}
          ></img>
        </Grid>
      </Grid>
    </footer>
  );
}
