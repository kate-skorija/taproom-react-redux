import React from "react";
import PropTypes from "prop-types";

function Keg(props){

  const kegStyles = {
    padding: '40px',
    backgroundColor: 'antiquewhite',
    borderBottom: '4px solid slategray',
  }

  return (
    <React.Fragment>
      <div style={kegStyles}>
        <div onClick = { () => props.whenKegClicked(props.id) }>
          <h3 style={{fontSize:'40px'}}>{props.name} | {props.brand}</h3>
          <p>{props.price}</p>
          <p>{props.alcoholContent}</p>
          <p>{props.pintsRemaining}</p>
        </div>
        <button className="btn btn-secondary" onClick = { () => props.whenPintSold(props.id)}>Pint Sold!</button>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pintsRemaining: PropTypes.number,
  whenKegClicked: PropTypes.func,
  whenPintSold: PropTypes.func
};

export default Keg;