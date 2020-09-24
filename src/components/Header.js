import React from "react";

function Header(){

  const h1Styles = {
    fontFamily: 'Oleo Script Swash Caps', 
    fontSize: '130px',
    padding: '30px 0 0 30px',
    marginBottom: '0'
  }

  const h2Styles = {
    fontFamily: 'Lato', 
    fontSize: '30px',
    padding: '0 0 0 30px'
  }
  
  const headerStyles = {
    padding: '15px',
    paddingBottom: '60px',
    backgroundColor: 'darkolivegreen'
  }
  
  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1 style={h1Styles}>The Fishbowl</h1>
        <h2 style={h2Styles}>Beers On Tap</h2>
      </div>
    </React.Fragment>
  );
}

export default Header;