import * as c from './../actions/ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const toggleEditForm = () => ({
  type: c.TOGGLE_EDIT_FORM
});

export const selectKeg = (keg) => {
  const { name, brand, price, alcoholContent, pintsRemaining, id } = keg;
	return {
		type: c.SELECT_KEG,
		name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    pintsRemaining: pintsRemaining,
    id: id
	};
};

export const addKeg = (keg) => {
  const { name, brand, price, alcoholContent, pintsRemaining, id } = keg;
	return {
		type: c.ADD_KEG,
		name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    pintsRemaining: pintsRemaining,
    id: id
	};
};