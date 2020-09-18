import rootReducer from '../../reducers/index-reducer';
// import formVisibleReducer from '../../form-visible-reducer';
// import kegListReducer from '../../keg-list-reducer';
// import selectedKegReducer from '../../selected-keg-reducer';
import { createStore } from 'redux';


describe('rootReducer', () => {

  let store = createStore(rootReducer);

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
      selectedKeg: null
    });
  });
});