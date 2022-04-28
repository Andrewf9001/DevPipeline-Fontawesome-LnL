import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../styles/App.scss";
import solidIcons from "../util/fontawesome/solidIcons";
import brandIcons from "../util/fontawesome/brandIcons";
import LandingPage from "./pages/LandingPage";
import Navbar from "./navigation/Navbar";
import IconSizePage from "./pages/IconSizePage";
import RotateFlipPage from "./pages/RotateFlipPage";
import AnimationsPage from "./pages/AnimationsPage";
import IconPull from "./pages/IconPull";
import PowerfulTransformations from "./pages/PowerfulTransformations";
import BrandsPage from "./pages/BrandsPage";
import CustomTemp from "./pages/CustomTemp";

solidIcons();
brandIcons();

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/" component={Navbar} />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/fa-size" component={IconSizePage} />
          <Route path="/fa-styling" component={RotateFlipPage} />
          <Route path="/fa-animations" component={AnimationsPage} />
          <Route path="/fa-pull" component={IconPull} />
          <Route
            path="/fa-transformations"
            component={PowerfulTransformations}
          />
          <Route path="/fa-brands" component={BrandsPage} />
          <Route path="/fa-custom-temp" component={CustomTemp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
