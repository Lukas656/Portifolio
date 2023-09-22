import React from "react";
import './layout.css';

import Header from './Header'
import Nav from './Navegacao'
import Content from './Content'
import Footer from './Footer'

const Layout = props => (
    <div className="layout">
        <Header />
        <div className="main">
            <Nav />
            <Content />
        </div>
        <Footer />
    </div>
)

export default Layout