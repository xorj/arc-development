import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import { Menu as MenuIcon } from "@material-ui/icons/";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import logo from "../../assets/logo.svg";

const options = [
  { text: "Services", link: "/services" },
  { text: "Custom Software", link: "/customsoftwares" },
  { text: "iOS/Android App Development", link: "/mobileapps" },
  { text: "Website Development", link: "/websites" },
];

const routes = [
  { text: "Home", link: "/" },
  { text: "Services", link: "/services" },
  { text: "The Revolution", link: "/revolution" },
  { text: "About Us", link: "/about" },
  { text: "Contact Us", link: "/contact" },
  { text: "Free Estimate", link: "/estimate" },
];
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    height: "5.5em",
  },
  logo: {
    height: "5.5em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      //Essa opção retira o efeito de opacidade no hover
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    minHeight: "45px",
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  menuItemSelected: {
    opacity: 1,
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  //Melhora a performance em dispositivos mobile
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  //Em caso da página ser atualizada, faz com que o valor de selectedIndex
  //para o valor da opção do Menu "Services" que foi escolhida
  const handleSelectedItem = () => {
    const option = options.indexOf(
      options.find((option) => option.link === window.location.pathname)
    );
    if (option === -1) {
      return null;
    } else {
      props.setValue("/services");
      return option;
    }
  };
  const [selectedIndex, setSelectIndex] = useState(0);

  useEffect(() => {
    setSelectIndex(handleSelectedItem());
  }, [props.value]);

  const handleChange = (e, value) => {
    props.setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectIndex(index);
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const getTabsValue = () => {
    if (options.filter((option) => option.link === props.value).length > 0) {
      return "/services";
    } else if (props.value === "/estimate") {
      return false;
    } else {
      return props.value;
    }
  };

  const tabs = (
    <React.Fragment>
      <Tabs
        value={getTabsValue()}
        className={classes.tabContainer}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {routes.map((route, index) =>
          route.link !== "/estimate" ? (
            <Tab
              key={route.link + index}
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup={anchorEl ? true : undefined}
              className={classes.tab}
              label={route.text}
              component={Link}
              to={route.link}
              value={route.link}
              aria-controls={route.link === "/services" ? "menu" : undefined}
              onMouseOver={
                route.link === "/services" ? (e) => handleClick(e) : undefined
              }
            />
          ) : null
        )}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        to="/estimate"
        onClick={() => props.setValue("/estimate")}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{ zIndex: 1302 }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={`${option}${index}`}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              handleClose();
              props.setValue("/services");
            }}
            component={Link}
            to={option.link}
            selected={selectedIndex === index}
            classes={{
              root: `${classes.menuItem} ${
                selectedIndex === index ? classes.menuItemSelected : null
              }`,
            }}
          >
            {option.text}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, index) => (
            <ListItem
              key={route.link + index}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.link);
              }}
              divider
              button
              selected={props.value === route.link}
              component={Link}
              to={route.link}
              className={
                route.link === "/estimate"
                  ? classes.drawerItemEstimate
                  : undefined
              }
            >
              <ListItemText
                disableTypography
                className={`${
                  route.link === props.value ? classes.drawerItemSelected : null
                } ${classes.drawerItem}`}
              >
                {route.text}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <ToolBar disableGutters>
            <Button
              disableRipple
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => props.setValue("/")}
            >
              <img alt="company logo" className={classes.logo} src={logo} />
            </Button>
            {matches ? drawer : tabs}
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
