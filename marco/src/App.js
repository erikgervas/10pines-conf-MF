import React from 'react';
import './App.css';
import logo from './logo-10p.png'
import registerAllApplications from "./registerAllApps";

registerAllApplications();

export const App = () => (
  <div id='marco'>
    <div className='columna-chica'>
      <Microfrontend placeholder='Votación de roots' id='votacion-roots'/>
      <Microfrontend placeholder='Blog' id='blog'/>
      <Microfrontend placeholder='Rocapp' id='rocapp'/>
    </div>

    <div className='columna-medio'>
      <img className='logo' src={ logo } alt='10pines' />
      <div id='status'>
        <h2>Status</h2>
      </div>
    </div>

    <div className='columna-chica'>
      <div className='pino-app'>
        <div id='secret-pal'>
          <h2>Secret-pal</h2>
        </div>
      </div>
      <Microfrontend placeholder='Salapp' id='salapp' />
      <Microfrontend placeholder='Loomio' id='loomio' />
    </div>
  </div>
);

const Microfrontend = ({placeholder, id, props}) => (
  <div className='pino-app' id={id}>
    <h2>{placeholder}</h2>
  </div>
);