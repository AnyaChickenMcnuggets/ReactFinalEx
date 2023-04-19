import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import CardItem from './components/CardItem';
import { useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  //хранения данных туров
const [products, setProducts] = useState([])

useEffect(() => {
  async function axiosData() {
    const productsData = await axios.get('https://6411ce033f3b9490ddd85705.mockapi.io/products');
    
    setProducts(productsData.data);
  }
  axiosData();
}, [])

  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <CardItem item={products}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
