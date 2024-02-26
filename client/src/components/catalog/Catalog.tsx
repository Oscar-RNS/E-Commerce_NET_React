import { Product } from "../../models/product";
import ProductList from "./ProductList";

interface MyProducts {
  products : Product[];
}

export default function Catalog({products} : MyProducts) {
  
  return (
    <>
       <ProductList products={products}/> 
    </>
  )
}
