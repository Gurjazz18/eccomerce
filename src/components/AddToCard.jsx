import React, { useEffect, useState } from "react";

const AddToCard = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState();
 

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const changeQty = (id, qty) =>
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id: id,
        qty: qty,
      },
    });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        backgroundColor: "#ececec",
        paddingBottom:10
       
      }}
    >
      <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
      <b style={{ alignSelf: "center" }}>Subtotal: $ {total?.toFixed(2)}</b>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {cart.length > 0 ? (
          cart?.map((prod) => (
            <div
              key={prod.title}
              style={{
                display: "flex",
                padding: 10,
                border: "1px solid grey",
                margin: 5,
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: 10 }}>
                <img
                  src={prod.image}
                  alt={prod.title}
                  style={{ width: "50px", objectFit: "cover", height: "50px" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <span>{prod.title}</span>
                  <b>$ {prod.price}</b>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button onClick={() => changeQty(prod.id, prod.qty - 1)}>
                  -
                </button>
                <span>{prod.qty}</span>
                <button onClick={() => changeQty(prod.id, prod.qty + 1)}>
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <span style={{ padding: 20, alignSelf: "center" }}>
            Cart is empty
          </span>
        )}
      </div>
    </div>
  );
};

export { AddToCard };
