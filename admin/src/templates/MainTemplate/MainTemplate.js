import React from 'react'
import { Route } from 'react-router-dom';
import MainHeader from '../../components/layout/MainHeader';
import MainMenu from '../../components/layout/MainMenu';
import MainFooter from '../../components/layout/MainFooter';


export const MainTemplate = (props) => {

    const { Component, ...restParam } = props;
    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <div className='container-fluid'>
                <div className='d-flex justify-content-start align-items-start'>
                    <MainMenu />
                    <div className='w-100 min-vh-100'>
                        <MainHeader />
                        <Component {...propsRoute} />
                        <MainFooter />
                    </div>
                </div>
            </div>
        </>
    }} />
}
