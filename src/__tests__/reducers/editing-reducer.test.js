import editingReducer from '../../reducers/editing-reducer';
import * as c from './../../actions/ActionTypes';

describe('editingReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(editingReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle editing form visibility state to true', () => {
    expect(editingReducer(false, { type: c.TOGGLE_EDIT_FORM })).toEqual(true);
  });
})