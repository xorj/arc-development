import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  IconButton,
  useMediaQuery,
  Typography,
  Hidden,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CallToAction from "./ui/CallToAction";

import ForwardArrow from "../assets/forwardArrow.svg";
import BackArrow from "../assets/backArrow.svg";
import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";

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

export default function Websites(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

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
                to="/mobileapps"
                onClick={() => props.setValue("/mobileapps")}
                style={{ backgroundColor: "transparent" }}
              >
                <img
                  alt="back to mobile apps development page"
                  src={BackArrow}
                />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            className={classes.heading}
            align={matchesMD ? "center" : undefined}
          >
            <Grid item>
              <Typography variant="h2" gutterBottom>
                Website Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Having a website is a necessity in today’s business world. They
                give you one central, public location to let people know who you
                are, what you do, and why you’re the best at it.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                From simply having your hours posted to having a full fledged
                online store, making yourself as accessible as possible to users
                online drives growth and enables you to reach new customers.
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
                to="/services"
                onClick={() => props.setValue("/")}
                style={{ backgroundColor: "transparent" }}
              >
                <img alt="forward to services page" src={ForwardArrow} />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems="center"
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Grid container direction="column" justify="center">
              <Typography
                variant="h2"
                gutterBottom
                align={matchesMD ? "center" : undefined}
              >
                Analytics
              </Typography>
              <img
                src={analytics}
                alt="analytics graph"
                style={{
                  marginLeft: matchesMD ? 0 : "-2.75em",
                  maxWidth: matchesMD ? "90%" : undefined,
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            style={{
              maxWidth: "35em",
              marginLeft: matchesMD ? 0 : "1em",
              marginTop: matchesMD ? "1em" : 0,
            }}
          >
            <Typography variant="body1" paragraph>
              Knowledge is power, and data is 21st Century gold. Analyzing this
              data can reveal hidden patterns and trends in your business,
              empowering you to make smarter decisions with measurable effects.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction={matchesMD ? "column" : "row"}
          justify="flex-end"
          style={{ margin: "5em 0" }}
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Grid container direction="column" justify="center">
              <Typography variant="h2" gutterBottom>
                E-Commerce
              </Typography>
              <img src={ecommerce} alt="globe" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            style={{
              maxWidth: "35em",
              marginLeft: matchesMD ? 0 : "1em",
              marginTop: matchesMD ? "1em" : 0,
            }}
          >
            <Grid item style={{ marginLeft: matchesMD ? 0 : "1em" }}>
              <Typography variant="body1" paragraph>
                It’s no secret that people like to shop online.
              </Typography>
              <Typography variant="body1" paragraph>
                In 2017 over $2.3 trillion was spent in e-commerce, and it’s
                time for your slice of that pie.s
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems="center"
          style={{ marginBottom: "5em" }}
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Grid container direction="column" justify="center">
              <Typography variant="h2" gutterBottom>
                Outreach
              </Typography>
              <img src={outreach} alt="megaphone" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            style={{
              maxWidth: "35em",
              marginLeft: matchesMD ? 0 : "1em",
              marginTop: matchesMD ? "1em" : 0,
            }}
          >
            <Typography variant="body1" paragraph>
              Draw people in with a dazzling website. Showing off your products
              online is a great way to help customers decide what’s right for
              them before visiting in person.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          justify="flex-end"
          alignItems="center"
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h2" gutterBottom>
                Search Engine
                <br />
                Optimization
              </Typography>
              <img src={seo} alt="podium" style={{ width: "20em" }} />
            </Grid>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justify={matchesMD ? "center" : undefined}
            align={matchesMD ? "center" : undefined}
            style={{
              maxWidth: "35em",
              marginLeft: matchesMD ? 0 : "1em",
              marginTop: matchesMD ? "1em" : 0,
            }}
          >
            <Typography variant="body1">
              How often have you ever been to the second page of Google results?
            </Typography>
            <Typography variant="body1" paragraph>
              If you’re like us, probably never.
            </Typography>
            <Typography variant="body1" paragraph>
              Customers don’t go there either, so we make sure your website is
              designed to end up on top.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setValue={props.setValue} />
    </React.Fragment>
  );
}
