import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedKeg != null) {
      this.props.selectedKeg = null;
    } else {
      const action = a.toggleForm();
      dispatch(action);
    };
  };

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  };

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const selectedKegInKegList = this.props.masterKegList[id];
    const action = a.selectKeg(selectedKegInKegList);
    dispatch(action);
  };

  handlePintSold = (kegId) => {
    const { dispatch } = this.props;
    const kegToUpdate = this.props.masterKegList[kegId];
    if (kegToUpdate.pintsRemaining > 0) {
      kegToUpdate.pintsRemaining--;
    }
    const action = a.addKeg(kegToUpdate);
    dispatch(action);
  };

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
  };

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEditForm();
    dispatch(action);
  };

  handleEditingKeg = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
  };

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm 
                                keg = {this.props.selectedKeg} 
                                onEditKeg = {this.handleEditingKeg} />
      buttonText = "Return to Keg List"
    } else if (this.props.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
                                keg = {this.props.selectedKeg} 
                                onClickingDelete = {this.handleDeletingKeg} 
                                onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Keg List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm 
                                onNewKegCreation = {this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List"
    } else {
      currentlyVisibleState = <KegList 
                                kegList = {this.props.masterKegList} 
                                onKegSelection = {this.handleChangingSelectedKeg} 
                                onPintSoldClick = {this.handlePintSold} />
      buttonText = "Add Keg"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedPost: PropTypes.object,
  editing: PropTypes.bool,
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg,
    editing: state.editing
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;