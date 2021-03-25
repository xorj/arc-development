import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

import CallToAction from "../components/ui/CallToAction";

import theme from "../components/ui/Theme";
import animationData from "../animations/landinganimation/data";
import ButtonArrow from "../components/ui/ButtonArrow";
import customSoftwateIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "40em",
    minWidth: "21em",
    paddingTop: "2em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
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
  buttonContainer: {
    marginTop: "1em",
  },
  heroTextContainer: {
    minWidth: "21.5em",
  },
  mainContainer: {
    maxWidth: "100%",
  },
  especialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  servicesContainer: {
    marginTop: "4rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5rem",
      padding: 10,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0",
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAespectRatio: "xMidyMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/*-----Hero Block-----*/}
      <Grid item>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item sm className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Cost Tecnology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  className={classes.estimateButton}
                  variant="contained"
                  component={Link}
                  to="/estimate"
                  onClick={() => props.setValue("/estimate")}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/revolution"
                  onClick={() => props.setValue("/revolution")}
                  variant="outlined"
                  className={classes.learnButtonHero}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>{" "}
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      {/*---Custom Software Block----*/}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
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
              variant="outlined"
              onClick={() => props.setValue("/customsoftwares")}
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
          justify={matchesSM ? "center" : undefined}
          className={classes.servicesContainer}
          item
          style={{ marginLeft: matchesSM ? 0 : "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
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
      {/*----The Revolution Block----*/}
      <Grid item>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "80em", marginTop: "5em" }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                diretion="column"
                justify="center"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for Revolution.
                  </Typography>
                  <Button
                    component={Link}
                    to="/revolution"
                    onClick={() => props.setValue("/revolution")}
                    variant="outlined"
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>{" "}
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
        {/*-----Information Block-----*/}
        <Grid item>
          <Grid
            container
            direction="row"
            style={{ height: "60em" }}
            alignItems="center"
          >
            <Grid
              container
              style={{ position: "absolute" }}
              direction={matchesXS ? "column" : "row"}
              spacing={matchesXS ? 10 : undefined}
            >
              <Grid
                item
                sm
                style={{
                  marginLeft: matchesXS ? 0 : "5em",
                  textAlign: matchesXS ? "center" : "left",
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Let's get personal.
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/about"
                      onClick={() => props.setValue("/about")}
                      variant="outlined"
                      style={{ color: "white", borderColor: "white" }}
                      className={classes.learnButton}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>{" "}
                      <ButtonArrow width={10} height={10} fill={"white"} />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm
                style={{
                  marginRight: matchesXS ? 0 : "5em",
                  textAlign: matchesXS ? "center" : "right",
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">Say hello!</Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/contact"
                      onClick={() => props.setValue("/contact")}
                      variant="outlined"
                      style={{ color: "white", borderColor: "white" }}
                      className={classes.learnButton}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>{" "}
                      <ButtonArrow width={10} height={10} fill={"white"} />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <div className={classes.infoBackground} />
          </Grid>
        </Grid>
      </Grid>
      {/*----Call To Action-----*/}
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
