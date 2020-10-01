import React from "react";
import PropTypes from "prop-types";

function Keg(props){

  const kegStyles = {
    display: 'flex',
    margin: '1em',
    flexDirection: 'column',
    boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.2)',
    borderRadius: '.6em',
    padding: '1em',
    backgroundColor: 'darkorange',
  }

  return (
    <React.Fragment>
      <div style={kegStyles}>
        <h3 style={{fontSize:'35px'}}>{props.name}</h3>
        <h4>{props.brand}</h4>
        <p>{props.price}</p>
        <p>{props.alcoholContent}</p>
        <p style={{fontSize: '20px'}}>{props.pintsRemaining}</p>
        <button style={{marginBottom: '5px'}} className="btn btn-dark" onClick = { () => props.whenPintSold(props.id)}>Pint Sold!</button>
        <button className="btn btn-dark" onClick = { () => props.whenKegClicked(props.id)}>Details</button>
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