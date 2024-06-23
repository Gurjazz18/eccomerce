import * as React from 'react';



import { Container, Grid,Stack,Item, Card, CardContent, CardActions, Button, Typography, Modal, Box, Table, TableBody, TableCell, TableRow, TableContainer, Paper, TextField } from '@mui/material';



export default function DetailsModel({ open, handleClose, product={} }) {
    const{thumbnail}=product

    const [review, setRevie] = React.useState(false)
    const [input, setInput] = React.useState('')
    const [rev, setRev] = React.useState([])
    const[thumbnai,setThumnai]=React.useState(thumbnail)
     console.log(thumbnai,"thumbnai")
    const GalaryImg= [
        'https://cdn.prod.website-files.com/5b3213161e5234bf1cfff9e1/65d73398d5fabe160b7c53b5_data%20(1).jpg',
        'https://cdn.prod.website-files.com/5b3213161e5234bf1cfff9e1/65f17aab753de5bb1ecb5bf4_data%20(5).jpg',
        'https://cdn.shopify.com/s/files/1/0070/7032/files/Reusable_water_bottle.png?v=1597958401',
        `${product.thumbnail}`,
      ]

    const handleReview = () => {
        setRevie(true)
    }

    const HandleReviewfun = () => {
        setRev([...rev,
        {
            comment: input, date: new Date(), rating: 5, reviewerEmail: "kanthkaler18@gmail.com", reviewerName: "Kailash"
        }])
        setRevie(false)
    }

    

    if (!product) return null;
    return (
        <div>

            <Modal open={open} onClose={handleClose}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 700, bgcolor: 'background.paper', boxShadow: 24, p: 4, maxHeight: '90vh', overflowY: 'auto' }}>
                    <Typography variant="h6" component="h2">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {product.description}
                    </Typography>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} border={'1px solid grey'} width={'100%'} height={'340px'}>
                      

                        <Stack direction="column" spacing={2} gridColumn="span 4" height={'340px'}   alignItems={'center'} alignContent={'center'}>
                            {
                                GalaryImg.map((url) => (
                                    <img src={url} alt="product" height={"70px"} border={'1px solid blue'} width={'60%'}
                                    
                                    onClick={()=>setThumnai(url)}
                                    />
                                ))
                            }
                        </Stack>
                        

                        <Box gridColumn="span 8" sx={{borderLeft: "1px solid black",height:'340px' }}>  <img src={thumbnai} alt={product.title} height='340px' width={'100%'} /></Box>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Brand</TableCell>
                                    <TableCell>{product.brand}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Category</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Price</TableCell>
                                    <TableCell>${product.price.toFixed(2)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Discount</TableCell>
                                    <TableCell>{product.discountPercentage}%</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Rating</TableCell>
                                    <TableCell>{product.rating}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Stock</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Minimum Order Quantity</TableCell>
                                    <TableCell>{product.minimumOrderQuantity}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Shipping Information</TableCell>
                                    <TableCell>{product.shippingInformation}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Return Policy</TableCell>
                                    <TableCell>{product.returnPolicy}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Warranty Information</TableCell>
                                    <TableCell>{product.warrantyInformation}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Availability Status</TableCell>
                                    <TableCell>{product.availabilityStatus}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Dimensions (WxHxD)</TableCell>
                                    <TableCell>{`${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} cm`}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Weight</TableCell>
                                    <TableCell>{product.weight} g</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Barcode</TableCell>
                                    <TableCell>{product.meta.barcode}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>QR Code</TableCell>
                                    <TableCell><img src={product.meta.qrCode} alt="QR Code" style={{ width: '50px' }} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Tags</TableCell>
                                    <TableCell>{product.tags.join(', ')}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Reviews</TableCell>

                                    {
                                        review ? (
                                            <div>
                                                <TextField
                                                    required
                                                    defaultValue="write your review"
                                                    value={input}
                                                    onChange={(e) => setInput(e.target.value)}
                                                />
                                                <Button onClick={HandleReviewfun} sx={{marginTop:1}}>Add</Button>
                                            </div>
                                        ) : <TableCell>
                                            {[...rev,...product.reviews].map((review, index) => (
                                                <div key={index}>
                                                    <strong>{review.user}:</strong> {review.comment} ({review.rating}/5)
                                                </div>
                                            ))}
                                        </TableCell>

                                    }


                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button onClick={handleClose} sx={{ mt: 2 }}>Close</Button>
                    <Button sx={{ mt: 2, pl: 50 }} onClick={handleReview}>Add Review</Button>
                </Box>
            </Modal>


        </div>
    );
}
