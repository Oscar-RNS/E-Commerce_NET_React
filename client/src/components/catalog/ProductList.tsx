import { Grid } from "@mui/material";
import { Product } from "../../models/product"
import ProductCard from "./ProductCard";

interface MyProducts {
  products : Product[];
}

export default function ProductList({products} : MyProducts) {
  return (
    <Grid container spacing={4}> 
       { products.map(product => (
          <Grid item xs={3} key={product.id}>
            <ProductCard product={product}/>
         </Grid>    
        ))
       }       
   </Grid>
  )
}
