import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="userId"
          component="input"
          type="text"
        />
        <button type="submit">찾기</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'SearchForm',
})(SearchForm);
