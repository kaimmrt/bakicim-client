import React from 'react'
import { useRouteMatch } from "react-router-dom";
import { Layout } from "antd";
import Header from '../Header/Header';

import App from "../../routes/index";
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../HomePage/Footer/Footer'

const MainApp = () => {
    const match = useRouteMatch();
    const { Content, Sider } = Layout;

    return (
        <Layout >
            <Header />


            <Content className="content-container">

                <Sidebar />
                <App match={match} />
                {/* <Footer /> */}


            </Content>

        </Layout>

    )
}

export default MainApp