import './layout.css';
import React from "react";
import { Link } from 'react-router-dom'


const Navegacao = props => (
    <div className="nav">

        <Link to="/" className='link1'>Galeria</Link>

        <Link to="/Thebatman" >#01 The Batman</Link>


    </div>
)

export default Navegacao