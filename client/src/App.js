import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
//import  { ProductForm } from './components/ProductForm'
import { ShowProducts } from './components/ShowProducts';
import { OneProduct } from './components/OneProduct';
import { EditProduct } from './components/EditProduct';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowProducts /> }> </Route>
          <Route path='/:id' element={ <OneProduct /> }> </Route>
          <Route path='/:id/edit' element={ <EditProduct /> }> </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
