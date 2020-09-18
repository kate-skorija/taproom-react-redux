export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, pintsRemaining, id } = action;
  switch(action.type) {
  case 'ADD_KEG':
    return Object.assign({}, state, {
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pintsRemaining: pintsRemaining,
        id: id
      }
    });
  default:
    return state;
  }
};