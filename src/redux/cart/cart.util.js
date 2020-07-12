export const addToCart = (items, newItem) =>{
    debugger;
    const newItems = [...items];
    const itemIndex=items.findIndex(x => x.id === newItem.id );
    if(itemIndex > -1){
            newItems[itemIndex].quantity += 1;
    }else{
        newItems.push({
            ...newItem,
            quantity : 1
        })
    }
    return newItems;
}

export const removeFromCart =(items, id) =>{
    return items.filter(x => x.id !== id);
}

