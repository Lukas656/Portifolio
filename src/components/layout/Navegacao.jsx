import './layout.css';
import React from "react";
import { Link } from 'react-router-dom'


const Navegacao = props => (
    <div className="nav">
             <ul>
                <li>
                    <Link to="/" className='link1'>Principal #0</Link>
                </li>
                <li>
                    <Link to="/page2" >Pojeto #01</Link>
                </li>
            
            </ul>
    </div>
)

export default Navegacao