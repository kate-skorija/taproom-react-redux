import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){

  const formStyles = {
    padding: '30px 0',
    width: '50%',
    margin: '0 auto'
  }
  
  return (
    <React.Fragment>
      <div style={{width: '100%'}}> 
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