import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <div style={{padding: '40px'}}>
        <h2>{Object.values(keg)[0].name} - {Object.values(keg)[0].brand}</h2>
        <p style={{fontSize: '20px'}}>Price: {Object.values(keg)[0].price} per pint</p>
        <p style={{fontSize: '20px'}}>Alcohol Content: {Object.values(keg)[0].alcoholContent}</p>
        <p style={{fontSize: '20px'}}>Pints Remaining: {Object.values(keg)[0].pintsRemaining}</p>
        <div className="btn-group">
          <button className="btn btn-secondary" onClick = {onClickingEdit}>Update Keg</button>
          <button className="btn btn-secondary" onClick = { () => onClickingDelete(Object.values(keg)[0].id)}>Remove from Tap List</button>
        </div>
      </div>
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
