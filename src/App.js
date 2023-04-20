import Video from './components/Video';
import Grid from './components/Grid';
import About from './components/About';
import Footer from './components/Footer';
import PicCarousel from './components/PicCarousel';
import Quote from './components/Quote';

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Jasmine Henry</h1>
          <About />
          <PicCarousel />
          <Quote />
          <Grid />
          <Video />
          <Footer />
      </header>
    </div>
  );
}

export default App;
