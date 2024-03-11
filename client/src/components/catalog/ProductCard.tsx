import { Avatar, Button, CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product } from "../../models/product";
import { blueGrey} from "@mui/material/colors";

interface MyProducts {
  product : Product;
}

export default function ProductCard({product} : MyProducts) {
  return (
    <>   
     {<Card>
      <CardHeader 
         avatar= {
          <Avatar sx={{bgcolor: blueGrey[700]}}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
         }
         title={product.name}
         />
      <CardMedia
        sx={{ height: 250, bgcolor: 'GrayText' }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add Cart</Button>
        <Button size="small">View</Button>
      </CardActions>
  </Card> }
    </>
  )
}
