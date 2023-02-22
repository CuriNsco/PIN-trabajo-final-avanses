import './App.css';
import Header from './componentes/Header';
import DivMain from './componentes/DivMain'; 
import Button from './componentes/Button';

function App() {
  return (
    <div className="App">
      <h1 className='h1-principio'>
        Sed ut perspiciatis unde omnis iste natus
      </h1>
      <h3 className='seudo-titulo'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</h3>
      <Header/>
      <DivMain/>
      <Button/>
      <div className='segundo-div'>
        <h2 className='h2-segundo-div'>Lorem lorem lorem <span>
          lorem lorem</span></h2>
      </div>
      <p className='parrafo-segundodiv'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
      </p>
      <div className='solapa'></div>
    </div>
  );
}

export default App;
