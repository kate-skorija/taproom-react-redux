import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) { 

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onPintSoldClick: PropTypes.func,
};

export default KegList;