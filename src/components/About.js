import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Avatar,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";

import history from "../assets/history.svg";
import profile from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5em",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  rowContainer: {
    padding: "0 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1.2em",
    },
  },
  avatar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "18em",
      width: "18em",
      maxHeight: "250px",
      maxWidth: "250px",
    },
  },
}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <Grid container direction="column">
        <Grid
          item
          className={classes.rowContainer}
          style={{ marginTop: matchesMD ? "1em" : "2em" }}
          align={matchesMD ? "center" : undefined}
        >
          <Typography variant="h2">About Us</Typography>
        </Grid>
        <Grid
          item
          container
          justify="center"
          style={{
            marginTop: "3em",
          }}
          className={classes.rowContainer}
        >
          <Typography
            variant="h4"
            align="center"
            className={classes.missionStatement}
          >
            Whether it be person to person, business to consumer, or an
            individual to their interests, technology is meant to bring us
            closer to what we care about in the best way possible. Arc
            Development will use that principle to provide fast, modern,
            inexpensive, and aesthetic software to the Midwest and beyond.
          </Typography>
        </Grid>
        <Grid
          container
          className={classes.rowContainer}
          style={{ margin: "10em 0" }}
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justify="space-around"
        >
          <Grid item>
            <Grid
              item
              container
              direction="column"
              lg
              style={{ maxWidth: "35em" }}
            >
              <Grid item align={matchesMD ? "center" : undefined}>
                <Typography variant="h4" gutterBottom>
                  History
                </Typography>
              </Grid>
              <Grid item align={matchesMD ? "center" : undefined}>
                <Typography
                  variant="body1"
                  paragraph
                  style={{ fontWeight: 700, fontStyle: "italic" }}
                >
                  We're are the new kid on the block
                </Typography>
                <Typography variant="body1" paragraph>
                  Founded in 2019, we’re ready to get our hands on the world’s
                  business problems.
                </Typography>
                <Typography variant="body1" paragraph>
                  It all started with one question: Why aren’t all businesses
                  using available technology? There are many different answers
                  to that question: economic barriers, social barriers,
                  educational barriers, and sometimes institutional barriers.
                </Typography>
                <Typography variant="body1" paragraph>
                  We aim to be a powerful force in overcoming these obstacles.
                  Recent developments in software engineering and computing
                  power, compounded by the proliferation of smart phones, has
                  opened up infinite worlds of possibility. Things that have
                  always been done by hand can now be done digitally and
                  automatically, and completely new methods of interaction are
                  created daily. Taking full advantage of these advancements is
                  the name of the game.
                </Typography>
                <Typography variant="body1" paragraph>
                  All this change can be a lot to keep up with, and that’s where
                  we come in.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container justify="center" lg>
              <img
                src={history}
                alt="quill pen sitting on top of book"
                style={{ maxWidth: matchesMD ? "80%" : undefined }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          className={classes.rowContainer}
          style={{ marginBottom: "15em" }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom align="center">
              Team
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph align="center">
              Zachary Reece, Founder
            </Typography>
            <Typography variant="body1" paragraph align="center">
              I started coding when I was 9 years old.
            </Typography>
          </Grid>
          <Grid item>
            <Avatar alt="founder" src={profile} className={classes.avatar} />
          </Grid>
          <Grid item container>
            <Grid item container justify={matchesMD ? "center" : undefined}>
              <Hidden lgUp>
                <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
                  <Typography variant="body1" align="center" paragraph>
                    I taught myself basic coding from a library book in third
                    grade, and ever since then my passion has solely been set on
                    learning — learning about computers, learning mathematics
                    and philosophy, studying design, always just learning.
                  </Typography>
                  <Typography variant="body1" align="center" paragraph>
                    Now I’m ready to apply everything I’ve learned, and to help
                    others with the intuition I have developed.
                  </Typography>
                </Grid>
              </Hidden>
              <Grid
                item
                container
                direction="column"
                lg
                alignItems={matchesMD ? "center" : undefined}
                style={{ marginBottom: matchesMD ? "2.5em" : 0 }}
              >
                <Grid item  container justify="center">
                  <img
                    src={yearbook}
                    alt="yearbook page about founder"
                    style={{ maxWidth: matchesMD ? "80%" : undefined }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="caption">
                    a page from my Sophomore yearbook
                  </Typography>
                </Grid>
              </Grid>
              <Hidden mdDown>
                <Grid item lg style={{ maxWidth: "25em", padding: "1.25em" }}>
                  <Typography variant="body1" align="center" paragraph>
                    I taught myself basic coding from a library book in third
                    grade, and ever since then my passion has solely been set on
                    learning — learning about computers, learning mathematics
                    and philosophy, studying design, always just learning.
                  </Typography>
                  <Typography variant="body1" align="center" paragraph>
                    Now I’m ready to apply everything I’ve learned, and to help
                    others with the intuition I have developed.
                  </Typography>
                </Grid>
              </Hidden>
              <Grid
                item
                container
                direction="column"
                lg
                alignItems={matchesMD ? "center" : "flex-end"}
              >
                <Grid item container justify="center">
                  <img
                    src={puppy}
                    alt="grey spotted puppy"
                    style={{ maxWidth: matchesMD ? "80%" : undefined }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="caption">
                    my miniature dapple dachshund, Sterling
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction />
    </React.Fragment>
  );
}
