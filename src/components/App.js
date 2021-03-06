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
import About from "./About";
import Contact from "./Contact";

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
          <Route
            exact
            path="/websites"
            render={(props) => <Websites {...props} setValue={setValue} />}
          />
          <Route
            exact
            path="/revolution"
            render={(props) => <Revolution {...props} setValue={setValue} />}
          />
          <Route
            exact
            path="/about"
            render={(props) => <About {...props} setValue={setValue} />}
          />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} setValue={setValue} />}
          />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
