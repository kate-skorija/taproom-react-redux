import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h2>{Object.values(keg)[0].name} - {Object.values(keg)[0].brand}</h2>
      <p>Price: {Object.values(keg)[0].price} per pint</p>
      <p>Alcohol Content: {Object.values(keg)[0].alcoholContent}</p>
      <p>Pints Remaining: {Object.values(keg)[0].pintsRemaining}</p>
      <button onClick = {onClickingEdit}>Update Keg</button>
      <button onClick = { () => onClickingDelete(Object.values(keg)[0].id)}>Remove from Tap List</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  // onPintSold: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;
