import React from 'react';
import './App.css';
import logo from './logo-10p.png'
import registerAllApplications from "./registerAllApps";

registerAllApplications();

export const App = () => (
  <div id='marco'>
    <div className='columna-chica'>
      <div className='pino-app' id='votacion-roots'>
        <h2>Votación de roots</h2>
      </div>
      <div className='pino-app' id='blog'>
        <h2>Blog</h2>
      </div>
      <div className='pino-app' id='rocapp'>
        <h2>Rocapp</h2>
      </div>
    </div>
    <div className='columna-medio'>
      <img src={logo}/>
      <div id='status'>
        <h2>Status</h2>
      </div>
    </div>
    <div className='columna-chica'>
      <div className='pino-app' id='secret-pal'>
        <h2>Secret-pal</h2>
      </div>
      <div className='pino-app' id='salapp'>
        <h2>Salapp</h2>
      </div>
      <div className='pino-app' id='loomio'>
        <h2>Loomio</h2>
      </div>
    </div>
  </div>
);
