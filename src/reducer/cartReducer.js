export const cartReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "ADD_TO_PRODUCTS":
        return { ...state, products: payload };
  
      case "ADD_TO_CART":
        return { ...state, cart: [ { ...payload }, ...state.cart] };
  
      case "REMOVE_FROM_CART":
        return { ...state, cart: state.cart.filter((cartitem) => cartitem.id !== payload.id) };
  
      case "CHANGE_CART_QTY":
        return {
          ...state,
          cart: state.cart.filter((cartitem) =>
            cartitem.id === payload.id ? (cartitem.qty = payload.qty) : cartitem.qty
          ),
        };
      default:
        break;
    }
  };
  