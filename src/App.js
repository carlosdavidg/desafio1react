import './App.css';

// importando los componentes de nuestra app
import Header from './components/Header.jsx'
import CardImagen from './components/Card.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <div className="App">
        <Header titulo="Galeria de imagenes con React"></Header>
        <div class="d-flex p2, justify-content-center p-5">
          <CardImagen titulo="Atardecer" descripcion="Atardecer en el mar" imagen="https://cdn.pixabay.com/photo/2022/11/17/17/11/sea-7598498_960_720.jpg"></CardImagen>
          <CardImagen titulo="Notebook" descripcion="Foto de notebook" imagen="https://cdn.pixabay.com/photo/2022/01/25/12/16/laptop-6966045_960_720.jpg"></CardImagen>
          <CardImagen titulo="Piano" descripcion="Foto de teclas de piano" imagen="https://cdn.pixabay.com/photo/2022/11/28/18/58/piano-7622920_960_720.jpg"></CardImagen>
        </div>
        <div className='footer'>
          <Footer texto="Todos los derechos reservados. 2022"></Footer>
        </div>

    </div>
  );
}

export default App;
