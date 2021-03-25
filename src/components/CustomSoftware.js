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
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import roots from "../assets/root.svg";

import documentsAnimation from "../animations/documentsAnimation/data.js";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data.js";
import automationAnimation from "../animations/automationAnimation/data.json";

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

export default function CustomSoftware(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAespectRatio: "xMidyMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAespectRatio: "xMidyMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAespectRatio: "xMidyMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: false,
    animationData: uxAnimation,
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
          direction="row"
          justify={matchesMD ? "center" : undefined}
          align={matchesMD ? "center" : undefined}
        >
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowContainer}
              style={{ marginRight: "1em", marginLeft: "-3.5em" }}
            >
              <IconButton
                style={{ backgroundColor: "transparent" }}
                component={Link}
                to="/services"
                onClick={() => props.setValue("/")}
              >
                <img alt="back to service page" src={BackArrow} />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item container direction="column" className={classes.heading}>
            <Grid item>
              <Typography variant="h2">Custom Softwate Deveplopment</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Whether we’re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology.
              </Typography>
              <Typography variant="body1" paragraph>
                Using regular commercial software leaves you with a lot of stuff
                you don’t need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on
                huge savings from increased efficiency.
              </Typography>
              <Typography variant="body1" paragraph>
                Our custom solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
              </Typography>
              <Typography variant="body1" paragraph>
                We create exactly what you what, exactly how you want it.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item className={classes.arrowContainer}>
              <IconButton
                style={{ backgroundColor: "transparent" }}
                component={Link}
                to="/mobileapps"
                onClick={() => props.setValue("/mobileapps")}
              >
                <img
                  alt="Foward to iOS/Androind App Development Page"
                  src={ForwardArrow}
                />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          style={{ marginTop: "15em", marginBottom: "20em" }}
        >
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            sm
            style={{
              maxWidth: "40em",
              marginTop: matchesSM ? "5em" : 0,
              marginBottom: matchesSM ? "5em" : 0,
            }}
          >
            <Typography variant="h4" gutterBottom>Save Energy</Typography>
            <img alt="lightbulb" src={lightbulb} style={{ width: "5em" }} />
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            sm
            style={{
              maxWidth: "40em",
              marginTop: matchesSM ? "5em" : 0,
              marginBottom: matchesSM ? "5em" : 0,
            }}
          >
            <Typography variant="h4" gutterBottom>Save Time</Typography>
            <img alt="stopwatch" src={stopwatch} style={{ width: "5em" }} />
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            sm
            style={{
              maxWidth: "40em",
              marginTop: matchesSM ? "5em" : 0,
              marginBottom: matchesSM ? "5em" : 0,
            }}
          >
            <Typography variant="h4" gutterBottom>Save Money</Typography>
            <img alt="cash" src={cash} style={{ width: "5em" }} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction={matchesMD ? "column" : "row"}
          justify="space-around"
        >
          <Grid
            item
            container
            className={classes.itemContainer}
            md
            style={{ marginBottom: `${matchesMD ? "10em" : 0}` }}
            direction={matchesMD ? "column" : undefined}
            justify={matchesMD ? "center" : undefined}
          >
            <Grid
              item
              container
              direction="column"
              md
              align={matchesMD ? "center" : undefined}
            >
              <Grid item>
                <Typography variant="h4" gutterBottom>Digital Documents & Data</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Reduce Errors. Reduce Waste. Reduce Costs.
                </Typography>
                <Typography variant="body1" paragraph>
                  Billions are spent annually on the purchasing printing, and
                  distribution of paper. On top of the masive environmental
                  impact this has, it causes harm to your bottom line as well.
                </Typography>
                <Typography variant="body1" paragraph>
                  By utilizing digital forms and documents you can remove these
                  obsolete expenses, accelerate your communication, and help the
                  Earth.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={documentsOptions}
                style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            className={classes.itemContainer}
            md
            direction={matchesMD ? "column" : undefined}
            justify={matchesMD ? "center" : undefined}
          >
            <Grid item md>
              <Lottie
                options={scaleOptions}
                style={{ maxHeight: 260, maxWidth: 280 }}
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              md
              align={matchesMD ? "center" : "right"}
            >
              <Grid item>
                <Typography variant="h4" gutterBottom>Scale</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Whether you're a large brand, just getting started, or taking
                  off right now, our application architecture ensures pain-free
                  growth and reliability.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          style={{ marginTop: "15em", marginBottom: "15em" }}
        >
          <Grid item container direction="column" alignItems="center">
            <Grid item container justify="center">
              <img
                src={roots}
                alt="tree witch roots extending out"
                height="450em"
                witdh="450em"
                style={{ maxWidth: "90%" }}
              />
            </Grid>
            <Grid item className={classes.itemContainer}>
              <Typography variant="h4" gutterBottom align="center">
                Root-Cause Analysis
              </Typography>
              <Typography variant="body1" paragraph align="center">
                Many problems are merely symptoms of larger, underlying issues.
              </Typography>
              <Typography variant="body1" paragraph align="center">
                We can help you thoroughly examine all areas of your business to
                develop a holistic plan for the most effective implementation of
                technology.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction={matchesMD ? "column" : "row"}
          justify="space-around"
          style={{ marginBottom: "10em" }}
        >
          <Grid
            item
            container
            className={classes.itemContainer}
            md
            style={{ marginBottom: `${matchesMD ? "10em" : 0}` }}
            direction={matchesMD ? "column" : "row"}
            justify={matchesMD ? "center" : undefined}
          >
            <Grid
              item
              container
              direction="column"
              md
              align={matchesMD ? "center" : undefined}
            >
              <Grid item>
                <Typography variant="h4" gutterBottom>Automation</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Why waste time when you don’t have to?
                </Typography>
                <Typography variant="body1" paragraph>
                  We can help you identify processes with time or event based
                  actions which can now easily be automated.
                </Typography>
                <Typography variant="body1" paragraph>
                  Increasing efficiency increases profits, leaving you more time
                  to focus on your business, not busywork.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={automationOptions}
                style={{ maxHeight: 290, maxWidth: 280 }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={matchesMD ? "column" : "row"}
            justify={matchesMD ? "center" : undefined}
            className={classes.itemContainer}
            md
          >
            <Grid item md>
              <Lottie
                options={uxOptions}
                style={{ maxHeight: 310, maxWidth: 155 }}
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              md
              align={matchesMD ? "center" : "right"}
            >
              <Grid item>
                <Typography variant="h4" gutterBottom>User Experience Design</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  A good design that isn’t usable isn’t a good design.
                </Typography>
                <Typography variant="body1" paragraph>
                  So why are so many pieces of software complicated, confusing,
                  and frustrating?
                </Typography>
                <Typography variant="body1" paragraph>
                  By prioritizing users and the real ways they interact with
                  technology we’re able to develop unique, personable
                  experiences that solve problems rather than create new ones.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setValue={props.setValue}/>
    </React.Fragment>
  );
}
