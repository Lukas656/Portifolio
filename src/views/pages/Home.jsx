import './CSS/cards.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../../data';

import Header from '../../components/layout/Header'
import Nav from '../../components/layout/Navegacao'
import Footer from '../../components/layout/Footer'

const Home = props => {
    const listDados = Data.map(info => {
        return (
            <div className='card' key={Data.id}>
                <h1>{info.titulo}</h1>
                <img src={info.url} alt={info.descricao} />
                <div className='info'>
                    <h3>
                        {info.descricao}
                    </h3>
                    <h3>Data: {info.data}</h3>
                </div>
                <Link to={info.page}>Versão Final do Projeto Concluido !</Link>
            </div>
        )
    })

    return (
        <>
            <div className='layout'>
                <Header />
                <Nav />
            </div>
            <section className='cards'>
                {listDados}
            </section>
            <Footer/>
        </>

    )
}

export default Home