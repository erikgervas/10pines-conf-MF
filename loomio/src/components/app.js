import { h, Component } from 'preact';
import axios from 'axios';
import styles from './styles.css';
import tortaVotaste from '../assets/rueda-votaste.png';
import tortaNoVotaste from '../assets/no-votaste.png';
import barras from '../assets/barras.png';
import logo from '../assets/loomio.svg'
import rip from '../assets/rip.gif'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { serverUp: true };
  }

  componentDidMount() {
    setInterval(this.pollLoomioServer.bind(this), 10000);
  }

  pollLoomioServer() {
    const timeout = setTimeout(() => this.notifyServerStatus(false), 5000);
    this.pingServer(timeout);
  }

  pingServer(timeout) {
    axios.get('/loomio/singleSpaEntry.js')
      .then(() => this.notifyServerStatus(true))
      .catch(() => this.notifyServerStatus(false))
      .finally(() => clearTimeout(timeout));
  }

  notifyServerStatus(status) {
    this.setState({ serverUp: status });
    document.dispatchEvent(new Event(`loomio/${ status ? 'up' : 'down' }`));
  }

  render({}, { serverUp }) {
    if (serverUp) {
      return (
        <div class={ styles.main }>
          <img id={ styles.logo } src={ logo }/>
          <div class={ styles.card }>
            <div style={ { color: '#767676', fontWeight: '400', marginLeft: '0.5rem', marginBottom: '1vh' } }>Current decisions</div>
            <div className={ styles.poll }>
              <img alt='barras' src={ barras }/>
              <div className={ styles.propuestaDescripcion }>
                <div>¿Qué diseño elegimos para plotear la heladera?</div>
                <div class={ styles.subdescripcion }>By Pino 1 - Closing in 2 days</div>
              </div>
            </div>
            <div className={ styles.poll }>
              <img alt='votaste' src={ tortaVotaste }/>
              <div className={ styles.propuestaDescripcion }>
                <div>Ajustes en el logo de 10 pines</div>
                <div class={ styles.subdescripcion }>By Pino 2 - Closing in 3 days</div>
              </div>
            </div>
            <div class={ styles.poll }>
              <img alt='no-votaste' src={ tortaNoVotaste }/>
              <div class={ styles.propuestaDescripcion }>
                <div>Política para HW personal</div>
                <div class={ styles.subdescripcion }>By Pino 3 - Closing in 5 days</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class={ styles.noDisponible }>
          <img style={ { width: '100%', height: 'auto' } } src={ rip }/>
        </div>
      )
    }
  }
}
