
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Product from "./pages/Product/Product";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import DrawerHOC from "./HOC/Drawer/DrawerHOC";
import ProductCategory from "./pages/ProductCategory/ProductCategory";
import { MainTemplate } from './templates/MainTemplate/MainTemplate';
import PostCategory from "./pages/PostCategory/PostCategory";
import Post from "./pages/Post/Post";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div>
    <DrawerHOC />
      <Switch>
        <Route path="/sign-in" exact component={SignIn} />
        <MainTemplate exact path='/dashboard' Component={Home} />
        <MainTemplate exact path='/' Component={Home} />
        <MainTemplate exact path='/profile' Component={Profile} />
        <MainTemplate exact path='/danh-muc-bai-dang' Component={PostCategory} />
        <MainTemplate exact path='/bai-dang' Component={Post} />
        <MainTemplate exact path='/danh-muc-san-pham' Component={ProductCategory} />
        <MainTemplate exact path='/san-pham' Component={Product} />
        <MainTemplate exact path='*' Component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
