import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) { 

  const kegListStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '43vh 43vh 43vh 43vh 43vh 43vh',
    width: '100vw',
    height: '65vh',
    overflow: 'scroll',
  }


  return (
    <React.Fragment>
      <div style={kegListStyles}>
      {Object.values(props.kegList).map((keg) => {
        return <Keg 
          whenKegClicked = { props.onKegSelection }
          whenPintSold = { props.onPintSoldClick }
          name={keg.name}
          brand={keg.brand}
          pintsRemaining={parseInt(keg.pintsRemaining)}
          id={keg.id}
          key={keg.id}
          />
      })} 
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onPintSoldClick: PropTypes.func,
};

export default KegList;