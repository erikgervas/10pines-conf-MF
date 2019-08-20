import React from 'react';
import './App.css';
import postImage from './chernobyl.jpeg'
import newGif from './new.gif'
import sorje from './jorge.png'

function App() {
  return (
    <div className='app'>
      <a className='card' href="https://blog.10pines.com/" target="_blank">
        <div className='card-text'>
          <h3 style={ { textAlign: 'center' } }>Último blog post:</h3>
          <p>Chernobyl Driven Development: 10 lessons learnt from the miniseries</p>
        </div>
        <img className='blog-image' alt='blog image' src={ postImage }/>
        <img className='new-gif' alt="new" src={ newGif }/>
      </a>
      <div className='post-revision'>
        <img alt='sorje' src={ sorje }/>
        <div style={{padding: '0.4rem'}}>
          <div>Post en revisión en all:</div>
          <div id='post-revision-name'>Our recruiting process</div>
        </div>
      </div>
    </div>
  );
}

export default App;
