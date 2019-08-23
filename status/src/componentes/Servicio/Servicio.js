import './Servicio.css';

const Servicio = ({ levantado, descripcion }) => (
  <div className="servicio">
    <div className={`luz ${levantado ? 'verde' : 'roja'}`}/>
    {descripcion}
  </div>
);

export default Servicio;
