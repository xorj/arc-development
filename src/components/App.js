import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";
import Websites from "./Websites";
import Revolution from "./Revolution";
function App() {
  //Gerencia qual a tab selecionada, tanto através do header quanto do footer
  const [value, setValue] = useState(window.location.pathname);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <LandingPage {...props} setValue={setValue} />}
          />
          <Route
            exact
            path="/services"
            render={(props) => <Services {...props} setValue={setValue} />}
          />
          <Route
            exact
            path="/customsoftwares"
            render={(props) => (
              <CustomSoftware {...props} setValue={setValue} />
            )}
          />
          <Route
            exact
            path="/mobileapps"
            render={(props) => <MobileApps {...props} setValue={setValue} />}
          />
          <Route exact path="/websites"  render={(props) => (
              <Websites {...props} setValue={setValue} />
            )}/>
          <Route
            exact
            path="/revolution"
            render={(props) => <Revolution {...props} setValue={setValue} />}
          />
          <Route exact path="/about" component={() => <div>About Us</div>} />
          <Route
            exact
            path="/contact"
            component={() => <div>Contact Us</div>}
          />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
