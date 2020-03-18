import React from 'react';

class FormError extends React.Component {//component for cath errors in form for register
  render() {
    const { theMessage } = this.props;//error message

    return (
      <div className="col-12 alert alert-danger px-3">
        {theMessage}
      </div>
    );
  }
}

export default FormError;