import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import ButtonArrow from "../components/ui/ButtonArrow";
import customSoftwateIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  especialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    width: "12em",
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  servicesContainer: {
    marginTop: "3rem",
    marginBottom: "2em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "3rem",
      padding: 10,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 45,
    padding: 8,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em",
        }}
      >
        <Typography
          gutterBottom
          variant="h2"
          align={matchesSM ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      {/*---Custom Software Block----*/}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-start"}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.especialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftwares"
              onClick={() => props.setValue("/customsoftwares")}
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>{" "}
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custom software icon"
              src={customSoftwateIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*---  iOS/Android App Block----*/}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionlity. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              onClick={() => props.setValue("/mobileapps")}
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>{" "}
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="ios/android app development icon"
              src={mobileAppsIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*---Website Block----*/}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-start"}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              marginLeft: matchesSM ? 0 : "5em",
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to="/websites"
              onClick={() => props.setValue("/websites")}
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>{" "}
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid>
            <img
              className={classes.icon}
              alt="website development icon"
              src={websitesIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
