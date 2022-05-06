/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
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
import UpLoad from "./components/layout/UpLoad";
import DrawerHOC from "./HOC/Drawer/DrawerHOC";
import ProductCategory from "./pages/ProductCategory/ProductCategory";
import { MainTemplate } from './templates/MainTemplate/MainTemplate';
import UpLoad from "./components/layout/UpLoad";
import DrawerHOC from "./HOC/Drawer/DrawerHOC";

function App() {
  return (
    <div>
      <DrawerHOC />
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/upload" exact component={UpLoad} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} />
          <Redirect from="*" to="/dashboard" />
        </Main>
        <Route path="/upload" exact component={UpLoad} />
        <MainTemplate exact path='/dashboard' Component={Home} />
        <MainTemplate exact path='/tables' Component={Tables} />
        <MainTemplate exact path='/billing' Component={Billing} />
        <MainTemplate exact path='/rtl' Component={Rtl} />
        <MainTemplate exact path='/profile' Component={Profile} />
        <MainTemplate exact path='/danh-muc-san-pham' Component={ProductCategory} />
        <Redirect from="*" to="/dashboard" />
      </Switch>
    </div>
  );
}

export default App;
