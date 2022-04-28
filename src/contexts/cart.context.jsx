
  
import { createContext, useState, useEffect } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  
  if (existingCartItem.quantity === 1) {
    return cartItems.filter( cartItem => cartItem.id !== productToRemove.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
  );
};

export const clearCartItem = (cartItems, productToRemove) => {

    return cartItems.filter( cartItem => cartItem.id !== productToRemove.id)

};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  cartCount: 0,
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(()=>{
    const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity , 0)
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(()=>{
    const newCartTotal = cartItems.reduce((total, cartItem)=> total + cartItem.quantity * cartItem.price , 0)
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (product) => setCartItems(addCartItem(cartItems, product));
  const removeItemToCart = (product) => setCartItems(removeCartItem(cartItems, product));
  const clearItemToCart = (product) => setCartItems(clearCartItem(cartItems, product));

  const value = { isCartOpen, cartItems, cartCount, cartTotal, setIsCartOpen, addItemToCart, removeItemToCart, clearItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};