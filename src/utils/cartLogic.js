export const calculateTotal = (items) => {
  return items.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ''));
    return acc + (price * (item.quantity || 1));
  }, 0);
};

export const addItem = (cart, product) => {
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    return cart.map(item => 
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cart, { ...product, quantity: 1 }];
};

export const removeItem = (cart, productId) => {
  return cart.filter(item => item.id !== productId);
};
