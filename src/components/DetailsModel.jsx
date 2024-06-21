import * as React from 'react';



import { Container, Grid, Card, CardContent, CardActions, Button, Typography, Modal, Box, Table, TableBody, TableCell, TableRow, TableContainer, Paper, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function DetailsModel({ open, handleClose, product }) {



    const [review, setRevie] = React.useState(false)
    const [input, setInput] = React.useState('')
    const [rev, setRev] = React.useState([])

   

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
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, bgcolor: 'background.paper', boxShadow: 24, p: 4, maxHeight: '90vh', overflowY: 'auto' }}>
                    <Typography variant="h6" component="h2">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {product.description}
                    </Typography>
                    <img src={product.thumbnail} alt={product.title} style={{ width: '80%', marginBottom: '20px' }} />
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
