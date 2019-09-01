import persona from './persona.png'
import reloj from './clock.png'
import stars from './stars.gif'

class VotacionRoots extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    .vot-main {
    background-color: #efeff0;
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    }
    .vot-main > .vot-card {
    margin-bottom: 0.9vw;
    }
    .vot-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    align-items: flex-start;
    width: 80%;
    }
    #vot-title {
    font-size: 1.2vw;
    font-weight: bold;
    }
    #vot-date {
    opacity: 0.7;
    margin-bottom: 1vw;
    font-size: 0.8vw;
    }
    .divider {
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    }
    #vot-card-persona {
    width: 4%;
    height: auto;
    }
    #vot-card-reloj {
    width: 3.2%;
    height: auto;
    }
    .vot-card-title {
    font-weight: bold;
    font-size: 0.7vw;
    margin: 0.6vw;
    }
    .vot-card-footer {
    display: flex;
    align-items: center;
    font-size: 0.6vw;
    }
    .vot-card-footer > div > * {
    margin-left: 0.5rem;
    }
    .vot-card-footer > div {
    display: flex;
    align-items: center;
    opacity: 0.7;
    }
    .vot-card-tiempo-c {
    color: green;
    font-size: 0.5vw;
    }
    .vot-card-tiempo-l {
    color: red;
    font-size: 0.5vw;
    }
    .vot-card-button {
    justify-self: flex-end;
    margin: 0.2vw 0.8vw;
    width: 15%;
    padding: 0.3vw;
    background-color: #6b016b;
    color: white;
    font-weight: 1000;
    font-size: 0.6vw;
    border: none;
    border-radius: 0.2rem;
    }
    #vot-stars-1 {
    position:absolute;
    left: -20%;
    top: -60%;
    }
    #vot-stars-2 {
    position:absolute;
    right: -20%;
    top: -60%;
    }
    </style>
    <h2 id="vot-title">Temario de la próxima Roots</h2>
    <span id="vot-date">20-09-2019</span>
    <div class="vot-card">
      <span class="vot-card-title">Mascota para 10 pines</span>
      <div class="divider"></div>
      <div class="vot-card-footer">
        <div>
          <span>#72</span>
          <img id="vot-card-persona" src=${ persona }/>
          <span>Erik Gervas</span>
          <img id="vot-card-reloj" src=${ reloj }/>
          <span class="vot-card-tiempo-c">CORTO</span>
        </div>
        <button class="vot-card-button">VOTAR</button>
      </div>
    </div>
    <div class="vot-card">
      <span class="vot-card-title">Facturas todos los días</span>
      <div class="divider"></div>
      <div class="vot-card-footer">
        <div>
          <span>#73</span>
          <img id="vot-card-persona" src=${ persona }/>
          <span>Lucas Giudice</span>
          <img id="vot-card-reloj" src=${ reloj }/>
          <span class="vot-card-tiempo-l">LARGO</span>
        </div>
        <button class="vot-card-button">VOTAR</button>
      </div>
    </div>
    <img id="vot-stars-1" src=${stars}/>
    <img id="vot-stars-2" src=${stars}/>
`;
  }
}

customElements.define('votacion-roots', VotacionRoots);