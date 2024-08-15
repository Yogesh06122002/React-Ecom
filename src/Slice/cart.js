import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addProduct(state, action) {
      const { product, count } = action.payload;

      if (!product || !product.id) {
        console.error('Invalid product:', product);
        return;
    }

      
      
      // Find the index of the product in the cart
      const index = state.cart.findIndex((c) => c.product.id === product.id);
      
      // If the product is already in the cart, update its quantity
      if (index !== -1) {
        state.cart[index].count += count;
      } else {
        // Otherwise, add the new product to the cart
        state.cart.push({ product, count });
      }
    },
    deleteProduct(state, action) {
      state.cart = state.cart.filter(s => s.product.id !== action.payload);
    },
    increaseCount(state, action) {
      const { productId,amount } = action.payload;
      
      // Find the product in the cart
      const index = state.cart.findIndex(c => c.product.id === productId);
      
      // If the product exists, update its quantity
      if (index !== -1) {
        state.cart[index].count += amount;
      }
    },
    decreaseCount(state, action) {
      const { productId, amount } = action.payload;
      
      // Find the product in the cart
      const index = state.cart.findIndex(c => c.product.id === productId);
      
      // If the product exists, update its quantity
      if (index !== -1) {
        state.cart[index].count -= amount;
        // Ensure quantity does not go below 1
        if (state.cart[index].count < 1) {
          state.cart[index].count = 1;
        }
      }
    }
  }
});

export const { addProduct, deleteProduct, increaseCount, decreaseCount } = cartSlice.actions;

export default cartSlice.reducer;
