import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

describe('selectedKegReducer', () => {

  let action;
  const kegData = {
    name: 'La Brea Brown',
    brand: 'Fossil Cove Brewery',
    price: '$5.00',
    alcoholContent: '6.0%',
    pintsRemaining: 124,
    id: 1
  };

  test('Should return null if no post is selected', () => {
		expect(selectedKegReducer(null, { type: null })).toEqual(null);
	});

  test('Should return selected keg', () => {
    const { name, brand, price, alcoholContent, pintsRemaining, id } = kegData;
    action = {
      type: c.SELECT_KEG,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsRemaining: pintsRemaining,
      id: id
    };
    expect(selectedKegReducer(null, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pintsRemaining: pintsRemaining,
        id: id
      }
    });
  });
});