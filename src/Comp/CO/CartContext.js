import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // نحاول نقرأ السلة من localStorage عند أول تحميل
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // كل ما cartItems تتغير، نحدث localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]); // سيعمل هذا عندما تتغير cartItems

  const addToCart = (item, quantity) => {
  const existingItem = cartItems.find(i => i.id === item.id);

  if (existingItem) {
    setCartItems(prev =>
      prev.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i // تعديل الكمية هنا
      )
    );
  } else {
    setCartItems(prev => [...prev, { ...item, quantity }]); // تأكد من إضافة الكمية عند إضافة المنتج لأول مرة
  }
};


  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
