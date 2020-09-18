import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, pintsRemaining } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsRemaining: pintsRemaining,
      id: id
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg, formVisibleOnPage: false});
  }

  handlePintSold = (kegId) => {
    const { dispatch } = this.props;
    const kegToUpdate = this.props.masterKegList[kegId];
    if (kegToUpdate.pintsRemaining > 0) {
      kegToUpdate.pintsRemaining--;
    }
    const action = {
      type: 'ADD_KEG',
      name: kegToUpdate.name,
      brand: kegToUpdate.brand,
      price: kegToUpdate.price,
      alcoholContent: kegToUpdate.alcoholContent,
      pintsRemaining: kegToUpdate.pintsRemaining,
      id: kegToUpdate.id
    }
    dispatch(action);
    this.setState({editing: false});
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({selectedKeg: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKeg = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, pintsRemaining } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsRemaining: pintsRemaining,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null,
      formVisibleOnPage: false
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm 
                                keg = {this.state.selectedKeg} 
                                onEditKeg = {this.handleEditingKeg} />
      buttonText = "Return to Keg List"
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
                                keg = {this.state.selectedKeg} 
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
  masterKegList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;