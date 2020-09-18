import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const kegData = {
    name: 'La Brea Brown',
    brand: 'Fossil Cove Brewery',
    price: '$5.00',
    alcoholContent: '6.0%',
    pintsRemaining: 124,
    id: 1
  };
  const currentState = {
    1: { name: 'La Brea Brown',
    brand: 'Fossil Cove Brewery',
    price: '$5.00',
    alcoholContent: '6.0%',
    pintsRemaining: 124,
    id: 1
    },
    2: { name: 'T-Rex Tripel',
    brand: 'Fossil Cove Brewery',
    price: '$6.00',
    alcoholContent: '8.0%',
    pintsRemaining: 124,
    id: 2
    }
  }

  test ('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to master TicketList', () => {
    const { name, brand, price, alcoholContent, pintsRemaining, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsRemaining: pintsRemaining,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
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

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: { name: 'T-Rex Tripel',
        brand: 'Fossil Cove Brewery',
        price: '$6.00',
        alcoholContent: '8.0%',
        pintsRemaining: 124,
        id: 2 }
    })
  });

});