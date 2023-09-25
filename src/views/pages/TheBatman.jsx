import React from 'react'
import './CSS/batman.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/layout/Footer'
const TheBatman = props => (
    <>
        <div className='batman'>
            <div id='menu'>
                <ul>
                    <li>
                        <h1>
                            <img src='https://i.ibb.co/p0MTK6n/batman-logo-white-png-3.png' alt='Morcego' />
                            <strong>THE BATMAN</strong>
                        </h1>
                    </li>
                    <li>
                        <Link to="/">Portifólio</Link>
                    </li>
                    <li>
                        <Link to="#contato">Contato</Link>
                    </li>
                    <li>
                        <Link to="https://www.cinemark.com.br/ingressos">Ingressos</Link>
                    </li>
                </ul>
            </div>
            <div class="banner">
                <div>
                    <h2>Compre seu Ingressso para um dos maiores filmes da históiria</h2>
                    <p class="texto">
                        Da Warner Bros. Pictures chega THE BATMAN com o realizador Matt Reeves
                        no comando e <br />protagonizado por Robert Pattinson no duplo papel
                        de detetive de Gotham City e do seu alter ego,<br />
                        o bilionário solitário Bruce Wayne
                    </p>
                    <button>
                        <span><Link to="https://www.cinemark.com.br/ingressos" target="_blank">Assisitir</Link></span>
                    </button>
                </div>
                <div class="imgMorcego">
                    <figure class="image">
                        <img src="https://i.ibb.co/2KppW9R/bat.webp" width="400" alt='CAPA BATMAN' />
                    </figure>
                </div>
            </div>
            <br />
            <h1>Ingressos Disponiveis</h1>

            <div class="conteiner">
                <div class="card">
                    <div class="content">
                        <h2>Manhã</h2>
                        <h3>Horario: 09:30</h3>
                        <button><span>$25,00</span></button>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <h2>Tarde</h2>
                        <h3>Horario: 17:30</h3>
                        <button><span>$25,00</span></button>
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <h2>Noite</h2>
                        <h3>Horario: 22:30</h3>
                        <button><span>$25,00</span></button>
                    </div>
                </div>
            </div>
            <div>
                <form>
                    <h1 id="contato">Entre em Contato</h1>
                    <p>Nome</p>
                    <input type="text" solid placeholder="Digite seu nome" autofocus />
                    <p>Tell</p>
                    <input type="tel" solid placeholder="(dd) seu telefone" required />
                    <p>Email</p>
                    <input type="email" solid placeholder="Digite seu Email" required />
                    <br /><br /><button type="submit"><span>Enviar</span></button>
                </form>
            </div>
            <Footer />
        </div>
    </>
)

export default TheBatman