import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){

  const formStyles = {
    paddingTop: '30px',
    width: '70vw',
    position: 'absolute',
    top: '87%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  }
  
  return (
    <React.Fragment>
      <div> 
        <form style={formStyles} className="form-group row justify-content-center" onSubmit={props.formSubmissionHandler}>
          <input style={{margin: '20px'}} className='form-control input-sm'
          type='text'
          name='name'
          placeholder='Name of Beer'
          />
          <input style={{margin: '20px'}} className='form-control input-sm'
          type='text'
          name='brand'
          placeholder='Brand'
          />
          <input style={{margin: '20px'}} className='form-control input-sm'
          type = 'text'
          name= 'price'
          placeholder = 'Price per Pint'
          />
          <input style={{margin: '20px'}} className='form-control input-sm'
          type = 'text'
          name='alcoholContent'
          placeholder = 'ABV%'
          />
          <input style={{margin: '20px'}} className='form-control input-sm'
          type = 'number'
          name='pintsRemaining'
          placeholder = 'Number of Pints'
          />
          <button className="btn btn-secondary btn-lg" style={{marginLeft: '20px'}} type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;