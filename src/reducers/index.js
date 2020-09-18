import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import selectedKegReducer from './selected-keg-reducer';
import editingReducer from './editing-reducer'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  selectedKeg: selectedKegReducer,
  masterKegList: kegListReducer,
  editing: editingReducer
});

export default rootReducer