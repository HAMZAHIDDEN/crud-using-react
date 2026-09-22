import Navbar from "./components/Navbar";
import Slider from "./components/slider";
import Proudacts from "./components/Proudacts";
import AddProduct from "./components/AddProduct";
import EditProudact from "./components/EditProudact";
import View from "./View";
import Home from "./Home";
import './App.css';
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <div className="row"> 
          <div className="col-2 sidebar">
            <Slider/>
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products" element={<Proudacts />} />
              <Route path="products/add" element={<AddProduct />} />
              <Route path="products/:id/view" element={<View />} />
              <Route path="products/:id/edit" element={<EditProudact />} />
            </Routes>
          </div>
      </div> 
      
    
    </>
  );
}

export default App;
