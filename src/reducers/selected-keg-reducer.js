export default (state = null, action) => {
  const { name, brand, price, alcoholContent, pintsRemaining, id } = action;
  switch(action.type){
  case 'SELECT_KEG':
    return {
      [id]: { name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pintsRemaining: pintsRemaining,
        id: id }
    }
    default:
      return state;
  }
};