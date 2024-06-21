

import { ProductPage } from './components/ProductPage';
import { Box, Grid, Typography } from '@mui/material';
import { cartReducer } from './reducer/cartReducer';
import { useEffect, useReducer } from 'react';
import { AddToCard } from "./components/AddToCard";

function App() {

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    products: []
  })

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()

    dispatch({
      type: "ADD_TO_PRODUCTS",
      payload: data
    })
  }

  useEffect(() => {
    getData()
  }, []);


  return (
    <div className="App">
      <Typography variant="h3" sx={{ textAlign: "center" }}>Eccomerce web Page</Typography>
      <Grid container spacing={2}>

        <Grid item xs={10}>
          <ProductPage state={state} dispatch={dispatch} />
        </Grid>

        <Grid item xs={2}>
          <AddToCard state={state} dispatch={dispatch} />
        </Grid>

      </Grid>

    </div>
  );
}

export default App;
