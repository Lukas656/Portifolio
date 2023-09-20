import './App.css';

import Header from '../components/layout/Header'
import Nav from '../components/layout/Navegacao'
import Content from '../components/layout/Content.jsx'
import Footer from '../components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Nav />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
