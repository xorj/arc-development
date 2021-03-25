import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import {
  Grid,
  IconButton,
  useMediaQuery,
  Typography,
  Hidden,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import ForwardArrow from "../assets/forwardArrow.svg";
import BackArrow from "../assets/backArrow.svg";
import integrationAnimation from "../animations/integrationAnimation/data.json";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  mainContainer: {
    padding: "2em 5em 10em 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1.2em 10em 1.2em",
    },
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const integrationOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAespectRatio: "xMidyMid slice",
    },
  };

  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid
          item
          container
          style={{ marginBottom: "10em" }}
          justify={matchesMD ? "center" : undefined}
        >
          <Hidden mdDown>
            <Grid
              item
              style={{ marginRight: "1em", marginLeft: "-3.5em" }}
              className={classes.arrowContainer}
            >
              <IconButton
                component={Link}
                to="/customsoftwares"
                onClick={() => props.setValue("/customsoftwares")}
                style={{ backgroundColor: "transparent" }}
              >
                <img alt="back to custom software" src={BackArrow} />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            align={matchesMD ? "center" : undefined}
            className={classes.heading}
          >
            <Grid item>
              <Typography variant="h2" gutterBottom>
                iOS/Android App Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Mobile apps allow you to take your tools on the go.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Whether you want an app for your customers, employees, or
                yourself, we can build cross-platform native solutions for any
                part of your business process. This opens you up to a whole new
                world of possibilities by taking advantage of phone features
                like the camera, GPS, push notifications, and more.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Convenience. Connection.</Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item className={classes.arrowContainer}>
              <IconButton
                component={Link}
                to="/websites"
                onClick={() => props.setValue("/customsoftwares")}
                style={{ backgroundColor: "transparent" }}
              >
                <img alt="forward to website development" src={ForwardArrow} />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify={matchesMD ? "center" : "space-around"}
          direction={matchesMD ? "column" : "row"}
          style={{ marginBottom: "10em" }}
        >
          <Grid
            item
            container
            direction="column"
            md
            className={classes.itemContainer}
            align={matchesMD ? "center" : "left"}
            style={{ marginBottom: "5em" }}
          >
            <Typography variant="h4" gutterBottom>
              Integration
            </Typography>
            <Typography variant="body1" paragraph>
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography variant="body1" paragraph>
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
          <Grid item md style={{ maxWidth: "25em", maxHeight: "25em" }}>
            <Lottie
              options={integrationOptions}
              style={{ maxWidth: "90%", maxHeight: "90%" }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            className={classes.itemContainer}
            align={matchesMD ? "center" : "right"}
            style={{ marginTop: matchesMD ? "5em" : 0 }}
          >
            <Typography variant="h4" gutterBottom>
              Simultaneous Platform Support
            </Typography>
            <Typography variant="body1" paragraph>
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography variant="body1" paragraph>
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          direction={matchesMD ? "column" : "row"}
          alignItems="center"
          justify={matchesMD ? "center" : "space-around"}
        >
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            align="center"
            md
            style={{
              maxWidth: "40em",
              marginBottom: matchesMD ? "5em" : 0,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Extend Functionality
            </Typography>
            <img alt="swiss army knife" src={swiss} />
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            md
            align="center"
            style={{
              maxWidth: "40em",
              marginBottom: matchesMD ? "5em" : 0,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Extend Access
            </Typography>
            <img
              alt="tear-one-off sign"
              src={access}
              style={{ maxWidth: matchesSM ? "90%" : "25em" }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            align="center"
            md
            style={{
              maxWidth: "40em",
              marginBottom: matchesMD ? "5em" : 0,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Incease Engagement
            </Typography>
            <img alt="app with notification" src={engagement} />
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setValue={props.setValue} />
    </React.Fragment>
  );
}
