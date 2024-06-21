import React, { useEffect, useReducer, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DetailsModel from './DetailsModel';


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

        <Box sx={{ flexGrow: 1, mt: 4 }}>
            <Grid container spacing={4}>
                {products.products?.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Card sx={{ maxWidth: 345, border: "1px solid black",maxHeight:450 }}>
                            <CardMedia
                                component="img"
                                alt={product.title}
                                height="190"
                                image={product.images[0]}
                            />
                            <CardContent sx={{height:"140px"}}>
                                <Typography gutterBottom variant="h6" component="div" >
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" >
                                    {product.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.price}$
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                                {cart.some((item) => item.id === product.id) ? (
                                    <Button variant="contained" color="error" size="small"
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
                                      variant="contained" color="success" size="small"
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
                                <Button size="small" variant="contained" onClick={() => handleOpen(product)}>View Details</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <DetailsModel open={open} handleClose={handleClose} product={selectedProduct} />

        </Box>

    )
}


