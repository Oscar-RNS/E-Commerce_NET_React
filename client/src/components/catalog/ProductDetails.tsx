import { ButtonBase, Grid, Paper, Typography, styled } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../models/product";

export default function ProductDetails() {
  
  const {id} = useParams<{id: string}>();
  const [product, setProduct] = useState<Product | null>(null);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://localhost:7244/api/products/${id}`)
    .then(response => setProduct(response.data))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }, [id])

  if(loading) return <h3>Loading...</h3>

  if(!product) return <h3>Product Not Found</h3>

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  

  return (
    <>
    {
       <Paper
       sx={{
         p: 2,
         margin: 'auto',
         maxWidth: 700,
         flexGrow: 1,
         backgroundColor: (theme) =>
           theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
       }}
     >
       <Grid container spacing={2}>
         <Grid item>
           <ButtonBase sx={{ width: 250, height: 250 }}>
             <Img alt="complex" src={product.pictureUrl} />
           </ButtonBase>
         </Grid>
         <Grid item xs={12} sm container>
           <Grid item xs container direction="column" spacing={2}>
             <Grid item xs>
               <Typography gutterBottom variant="subtitle1">
                 NAME : {product.name}
               </Typography>
               <Typography variant="body2" mt={2} gutterBottom>
                DESCRIPTION: {product.description}
               </Typography>
               <Typography variant="body2" mt={2} color="text.secondary">
                 TYPE : {product.type}
               </Typography>
               <Typography variant="body2" mt={2} color="text.secondary">
                 BRAND : {product.brand}
               </Typography>
               <Typography variant="body2" mt={2} color="text.secondary">
                 STOCK: {product.quantityInStock}
               </Typography>
             </Grid>
             <Grid item>
               <Typography sx={{ cursor: 'pointer' }} variant="body2">
                 {/*Remove*/}
               </Typography>
             </Grid>
           </Grid>
           <Grid item>
             <Typography variant="subtitle1" component="div">
               ${(product.price / 100).toFixed(2)}
             </Typography>
           </Grid>
         </Grid>
       </Grid>
     </Paper>
    }
    </>
  )
}
