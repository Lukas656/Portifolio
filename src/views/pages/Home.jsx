import './pages.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = props => (
    <div className="home">
        <h1>Galeria</h1>
        <section className='cards'>
            <div className='card'>
                <img src="https://i.ibb.co/nDGSfT7/Batman.png" alt="Projeto #01" />
                <div className='info'>
                    <h3>Data de Criação: 00/00/00000</h3>
                    <h3>
                        Feito com: HTML , CSS, Node.JS, MongoDB, ReactJS
                    </h3>
                </div>
                <Link to="/Thebatman">Navegar para o Projeto</Link>
            </div>
            
        </section>
    </div>
)

export default Home