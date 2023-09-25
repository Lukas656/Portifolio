import React from 'react'
import { Link } from 'react-router-dom'

const Blog = props => (
    <div className="pages">
       <div className='card'>
                <div className='info'>
                    <h3>Data de Criação: 00/00/00000</h3>
                    <h3>
                        Feito com: HTML , CSS, Node.JS, MongoDB, ReactJS
                    </h3>
                </div>
                <Link to="/">Navegar para o Projeto</Link>
                <img src="" alt="Projeto #01" />
            </div>
    </div>
)

export default Blog