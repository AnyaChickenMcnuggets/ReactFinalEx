import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
