import { Routes, Route } from "react-router-dom";
import Shopapp from "./shopapp";
import All from "./all";
import Consoles from "./consoles";
import Pcs from "./pcs";
import Accessories from "./accessories";
import Product from "../../components/product/product";
import AddProduct from "../Upload/AddProduct";


const Shopjunction = () => {
  return (
    <>
      <Shopapp />
      <Routes>
        <Route path="/all" element={<All />} />
        <Route path="/consoles" element={<Consoles />} />
        <Route path="/pcs" element={<Pcs />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/upload" element={<AddProduct />} />

        
      </Routes>
      
    </>
  );
};

export default Shopjunction;
