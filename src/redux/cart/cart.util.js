export const addToCart = (items, newItem) => {
  const itemIndex = items.findIndex((x) => x.id === newItem.id);
  if (itemIndex > -1) {
    return items.map((x) => {
      if (x.id === newItem.id) {
        x.quantity += 1;
      }
      return { ...x };
    });
  } else {
    items.push({
      ...newItem,
      quantity: 1,
    });
    return [...items];
  }
};

export const removeFromCart = (items, { id }) => {
  return items.filter((x) => x.id !== id);
};

export const decreaseFromCart = (items, { id, quantity }) => {
  if (quantity === 1) {
    return removeFromCart(items, { id });
  } else {
    return items.map((x) => {
      if (x.id === id) {
        x.quantity -= 1;
      }
      return { ...x };
    });
  }
};
