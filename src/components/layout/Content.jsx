import React from "react";
import './layout.css';
import { Routes, Route } from "react-router-dom"; 
 
import Home from "../../views/pages/Home";
import Page2 from "../../views/pages/Page2";

const Content = props => (
    <div className="content">
     <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/page2" exact element={<Page2 />} />
      
    </Routes>
   
    </div>
)

export default Content