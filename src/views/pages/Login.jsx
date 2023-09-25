import React from 'react'
import './CSS/login.css'
import { Link } from 'react-router-dom'
import favicon from './incons/favicon.ico'
import logicon from './incons/log-in.svg'
import Footer from '../../components/layout/Footer'
const Login = props => (
  <>
    <div className="login">
      <div className="logo"><img className="img-top" src={favicon} alt='Img Topo' width="50px" />
        <p>Camp.in</p>
      </div>
      <article>
        <section className="form-login">
          <div className="box">
            <header>
              <img src={logicon} alt='logo' />
              <h1>Faça seu Login</h1>
            </header>
            <p>Entre com suas informações de cadastro.</p>
            <br />
            <form action="" method="get">
              <label for="email">E-mail:</label>
              <input type="email" name="email" id="input-email" placeholder="Digite seu e-mail" />
              <br />
              <label for="email">Senha:</label>
              <input type="password" name="senha" id="input-password" placeholder="Digite sua Senha" />
            </form>
            <div>
              <div class="input-check">
                <input type="checkbox" name="check" id="input-check" />
                <p>Lembre-me</p>
              </div>
              <a href="http://">Esqueci minha Senha</a>
            </div>
            <button type="submit">Entrar</button>
            <br />
            <a href="http://">Não tem uma conta? Registre-se</a>
          </div>
        </section>
        <section id="back-car"></section>
      </article>
      <Footer />
    </div>
  </>
)

export default Login