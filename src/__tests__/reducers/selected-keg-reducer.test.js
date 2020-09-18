import selectedPostReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {
  
  test('Should return null if no post is selected', () => {
		expect(selectedPostReducer(null, { type: null })).toEqual(null);
	});

})