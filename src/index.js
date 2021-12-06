import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globo.scss';
import Header from './components/Header';
import Home from './pages/Home';
import CuratorItem from './components/Curator';
import Footer from './components/Footer';
import Places from './components/Places';

const CONFIG = {
  state:"MG",
  city:"Muriaé"
}


ReactDOM.render(
  <div className='main__wrapper'>
    <div className='main__container'>
      <Header city={CONFIG.city} state={CONFIG.state}/>
      <Home city={CONFIG.city}/>
      <Places/>
      <CuratorItem/>
    </div>
    <Footer/>
  </div>,
  document.getElementById('root')
);

