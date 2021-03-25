import React from "react";
import { Link } from "react-router-dom";
import ButtonArrow from "./ButtonArrow";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, useMediaQuery } from "@material-ui/core";

import theme from "./Theme";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 45,
    padding: 8,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    //Parallax effect
    backgroundAttachment: "fixed",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    margin: "0 5em 0 3em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={matchesSM ? { textAlign: "center" } : { marginLeft: "5em" }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software. <br />
              Revolutionary Results.
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              style={{ fontSize: "1.5rem" }}
            >
              Take advantage of the 21st century.
            </Typography>
            <Grid container item justify={matchesSM ? "center" : undefined}>
              <Button
                component={Link}
                to="/revolution"
                onClick={() => props.setValue("/revolution")}
                variant="outlined"
                className={classes.learnButton}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>{" "}
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/estimate"
          onClick={() => props.setValue("/estimate")}
          varient="contained"
          className={classes.estimateButton}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
