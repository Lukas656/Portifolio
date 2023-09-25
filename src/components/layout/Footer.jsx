import React from "react";
import './layout.css';
import { Link } from 'react-router-dom'

const Footer = props => (
    <div className="footer">
        <div className="footer-content">
        <div className="contact-info">
          <h3>Contato</h3>
          <p>Email: lucassantosnasc.21@gmail.com</p>
          <p>Telefone: (11) 95381-9876</p>
          <p>Estado: São Paulo</p>
        </div>
        <div className="social-links">
          <h3>Redes Sociais</h3>
          <ul>
            <li><a href="https://github.com/Lukas656/Portifolio" target="_blank" rel="noopener noreferrer">Repositório Github.com</a></li>
            <li><a href="https://www.linkedin.com/in/link-lucas-santos/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><Link to="/">Voltar Para o Portifólio</Link></li>
          
          </ul>
        </div>
        </div>
        
      <div className="copyright">
        <span>&copy; {new Date().getFullYear()} Feito por: Lucas Santos Nascimento.</span>
      </div>
    </div>
)

export default Footer