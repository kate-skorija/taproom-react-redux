import React from "react";
import Background from './../images/beer.jpg'
import Fishbowl from './../images/fishbowl.jpg'


function Header(){

  const h1Styles = {
    fontFamily: 'Oleo Script Swash Caps', 
    fontSize: '100px',
    padding: '30px 0 0 30px',
    marginBottom: '0',
    color: '#292b2c'
  }

  const h2Styles = {
    fontFamily: 'Lato', 
    fontSize: '30px',
    padding: '0 0 0 30px',
    color: '#292b2c'
  }
  
  const headerStyles = {
    backgroundImage: `url(${Background})`,
    padding: '10px 15px 40px 15px',
    backgroundColor: 'darkolivegreen'
  }

  const imageStyle = {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    float: 'right',
    marginRight: '50px'

  }
  
  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1 style={h1Styles}>The Fishbowl <img style={imageStyle} src={Fishbowl}></img></h1>
        <h2 style={h2Styles}>Beers On Tap</h2>
      </div>
    </React.Fragment>
  );
}

export default Header;