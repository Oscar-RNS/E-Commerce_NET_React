import { List } from "@mui/material";
import { Product } from "../../models/product"
import ProductCard from "./ProductCard";

interface MyProducts {
  products : Product[];
}

export default function ProductList({products} : MyProducts) {
  return (
    <List>
       { products.map(product => (
         <ProductCard key={product.id} product={product}/>
        ))
       }
   </List>
  )
}
