import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
<<<<<<< Updated upstream
=======
import UpLoad from "./components/layout/UpLoad";
import DrawerHOC from "./HOC/Drawer/DrawerHOC";
import ProductCategory from "./pages/ProductCategory/ProductCategory";
import { MainTemplate } from './templates/MainTemplate/MainTemplate';
>>>>>>> Stashed changes

function App() {
  return (
    <div>
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
<<<<<<< Updated upstream
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} />
          <Redirect from="*" to="/dashboard" />
        </Main>
=======
        <Route path="/upload" exact component={UpLoad} />
        <MainTemplate exact path='/dashboard' Component={Home} />
        <MainTemplate exact path='/tables' Component={Tables} />
        <MainTemplate exact path='/billing' Component={Billing} />
        <MainTemplate exact path='/rtl' Component={Rtl} />
        <MainTemplate exact path='/profile' Component={Profile} />
        <MainTemplate exact path='/danh-muc-san-pham' Component={ProductCategory} />
        <Redirect from="*" to="/dashboard" />
>>>>>>> Stashed changes
      </Switch>
    </div>
  );
}

export default App;
