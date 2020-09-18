import * as actions from './../../actions';

describe('help queue actions', () => {
  it('deleteKeg should create DELETE_TICKET action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('selectKeg should create SELECT_KEG action', () => {
    expect(actions.selectKeg({
        name: 'T-Rex Tripel',
        brand: 'Fossil Cove Brewery',
        price: '$6.00',
        alcoholContent: '8.0%',
        pintsRemaining: 124,
        id: 1 }))
        .toEqual({
          type: 'SELECT_KEG',
          name: 'T-Rex Tripel',
          brand: 'Fossil Cove Brewery',
          price: '$6.00',
          alcoholContent: '8.0%',
          pintsRemaining: 124,
          id: 1 });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({
        name: 'T-Rex Tripel',
        brand: 'Fossil Cove Brewery',
        price: '$6.00',
        alcoholContent: '8.0%',
        pintsRemaining: 124,
        id: 1 }))
        .toEqual({
          type: 'ADD_KEG',
          name: 'T-Rex Tripel',
          brand: 'Fossil Cove Brewery',
          price: '$6.00',
          alcoholContent: '8.0%',
          pintsRemaining: 124,
          id: 1 });
  });

});