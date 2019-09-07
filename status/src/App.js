import { Component, Fragment } from 'inferno';
import './App.css';
import Servicio from './componentes/Servicio/Servicio';
import Titulo from './componentes/Titulo/Titulo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicios: {
        'Luz': true,
        'Internet': true,
        'Mingo': true,
      }
    };
  }

  actualizarLoomio(levantado) {
    console.log('Actualizando Loomio', levantado);
    const { servicios } = this.state;
    servicios['Loomio'] = levantado;
    this.setState({ servicios });
  }

  componentDidMount() {
    const microfrontendLoomio = document.getElementById('loomio');
    if (microfrontendLoomio) {
      console.log('Se registran los listeners');
      microfrontendLoomio.addEventListener('loomio/up', this.actualizarLoomio.bind(this, true));
      microfrontendLoomio.addEventListener('loomio/down', this.actualizarLoomio.bind(this, false));
    }
  }

  render() {
    const { servicios } = this.state;

    return (
      <Fragment>
        <Titulo>Estado de los servicios</Titulo>
        <div className="servicios">
          {Object.keys(servicios).map(servicio => <Servicio id={servicio} descripcion={servicio}
                                                            levantado={servicios[servicio]}/>)}
        </div>
      </Fragment>
    );
  }
}

export default App;
