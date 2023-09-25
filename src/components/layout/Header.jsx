import React from "react";
import './layout.css';

const Header = props => (
    <div className="header">
        <header>
            <div className="perfil">
                <span>Lucas Santos</span><img src="https://i.ibb.co/khySp1X/987e8f93-970a-4f51-8427-b0da07eae2de.jpg" alt="Perfil" />
            </div>
            <h1>Portifólio</h1>
            <input type="text" placeholder="Nome do Pojeto..."  style={{
          backgroundImage: `url('https://i.ibb.co/4KHV5yz/2203511-find-glass-look-magnify-search-icon.png')`,
          backgroundPosition: 'left center', // Posição da imagem no input
          backgroundRepeat: 'no-repeat', // Não repetir a imagem
          backgroundSize: '20px 20px', // Tamanho da imagem
          paddingRight: '20px', // Espaço à direita para o ícone
        }}></input>
        </header>
    </div>
)

export default Header