import React, { useEffect, useReducer, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import DetailsModel from './DetailsModel';
import SimpleCarousel from './Carousel';


export const ProductPage = ({ state, dispatch }) => {
    const { products, cart } = state;
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProduct(null);
    };

    console.log(products,"products")


    return (
     <Container>
        <Box sx={{  mt: 4 }}>
            <Grid container spacing={2}>
                {products.products?.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Card sx={{ maxWidth: 380, border: "1px solid black",maxHeight:480 }}>
                           
                            <SimpleCarousel product={product} />
                            <CardContent sx={{height:"170px",display:"flex",flexDirection:"column",gap:"10px",paddingTop:"25px"}}>
                                <Typography gutterBottom variant="h6" component="div"  >
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" >
                                    {product.description.slice(0, 100)}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.price}$
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: "flex", justifyContent: "space-between", gap: "10px",paddingTop:"5" }}>
                                {cart.some((item) => item.id === product.id) ? (
                                    <Button variant="contained" color="error" sx={{fontSize:"10px",height:"30px"}}
                                        onClick={() =>
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: product,
                                            })
                                        }
                                    >
                                        Remove
                                    </Button>
                                ) : (
                                    <Button
                                      variant="contained" color="success" sx={{fontSize:"10px",height:"30px"}}
                                        onClick={() =>
                                            dispatch({
                                                type: "ADD_TO_CART",
                                                payload: {
                                                    id: product.id,
                                                    title:product.title,
                                                    image: product.thumbnail,
                                                    qty: 1,
                                                    price: product.price,
                                                },
                                            })
                                        }
                                    >
                                        Add TO Cart
                                    </Button>
                                )}
                                <Button sx={{fontSize:"10px",height:"35px"}} variant="contained" onClick={() => handleOpen(product)}>View Details</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
          {
            open &&  <DetailsModel open={open} handleClose={handleClose} product={selectedProduct} />
          }

        </Box>
          </Container>
        
    )
}


