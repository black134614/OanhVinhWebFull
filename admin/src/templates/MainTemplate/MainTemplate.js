import React from 'react'
import { Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Layout, Drawer, Affix } from "antd";
import Sidenav from "../../components/layout/Sidenav";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { TOKEN, USER_LOGIN } from '../../util/constants/settingSystem';

const { Header: AntHeader, Content, Sider } = Layout;

export const MainTemplate = (props) => {
    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState("right");
    const [sidenavColor, setSidenavColor] = useState("#1890ff");
    const [sidenavType, setSidenavType] = useState("transparent");
    const [fixed, setFixed] = useState(false);
    const [backgroundColor, SetBackgroundColor] = useState("lightblue")

    const openDrawer = () => setVisible(!visible);
    const handleSidenavType = (type) => setSidenavType(type);
    const handleSidenavColor = (color) => setSidenavColor(color);
    const handleFixedNavbar = (type) => setFixed(type);
    const handleBackgroundColor = (color) => SetBackgroundColor(color);

    let { pathname } = useLocation();
    pathname = pathname.replace("/", "");

    useEffect(() => {
        if (pathname === "rtl") {
            setPlacement("left");
        } else {
            setPlacement("right");
        }
    }, [pathname]);

    //auth user login
    const history = useHistory();
    const authUserLogin = () => {
        if (!localStorage.getItem(TOKEN) || !localStorage.getItem(USER_LOGIN)) {
            history.push("/sign-in")
        }
    }
    const { Component, ...restParam } = props;
    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <Layout
                className={`layout-dashboard ${pathname === "profile" ? "layout-profile" : ""
                    } ${pathname === "rtl" ? "layout-dashboard-rtl" : ""}`}
                    style={{backgroundColor: `${backgroundColor}`}}
            >
                {authUserLogin()}
                <Drawer
                    title={false}
                    placement={placement === "right" ? "left" : "right"}
                    closable={false}
                    onClose={() => setVisible(false)}
                    visible={visible}
                    key={placement === "right" ? "left" : "right"}
                    width={250}
                    className={`drawer-sidebar ${pathname === "rtl" ? "drawer-sidebar-rtl" : ""
                        } `}
                >
                    <Layout
                        className={`layout-dashboard ${pathname === "rtl" ? "layout-dashboard-rtl" : ""
                            }`}
                    >
                        <Sider
                            trigger={null}
                            width={250}
                            theme="light"
                            className={`sider-primary ant-layout-sider-primary ${sidenavType === "#fff" ? "active-route" : ""
                                }`}
                            style={{ background: sidenavType }}
                        >
                            <Sidenav color={sidenavColor} />
                        </Sider>
                    </Layout>
                </Drawer>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => {
                    }}
                    trigger={null}
                    width={250}
                    theme="light"
                    className={`sider-primary ant-layout-sider-primary ${sidenavType === "#fff" ? "active-route" : ""
                        }`}
                    style={{ background: sidenavType }}
                >
                    <Sidenav color={sidenavColor} />
                </Sider>
                <Layout>
                    {fixed ? (
                        <Affix>
                            <AntHeader className={`${fixed ? "ant-header-fixed" : ""}`}>
                                <Header
                                    onPress={openDrawer}
                                    name={pathname}
                                    subName={pathname}
                                    handleSidenavColor={handleSidenavColor}
                                    handleSidenavType={handleSidenavType}
                                    handleFixedNavbar={handleFixedNavbar}
                                    handleBackgroundColor={handleBackgroundColor}
                                />
                            </AntHeader>
                        </Affix>
                    ) : (
                        <AntHeader className={`${fixed ? "ant-header-fixed" : ""}`}>
                            <Header
                                onPress={openDrawer}
                                name={pathname}
                                subName={pathname}
                                handleSidenavColor={handleSidenavColor}
                                handleSidenavType={handleSidenavType}
                                handleFixedNavbar={handleFixedNavbar}
                                handleBackgroundColor={handleBackgroundColor}
                            />
                        </AntHeader>
                    )}
                    <Content className="content-ant">
                        <Component {...propsRoute} />
                    </Content>
                </Layout>
            </Layout>
        </>
    }} />
}
