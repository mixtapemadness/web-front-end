import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button/Button';

class CompetitionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstname: '',
        lastname: '',
        emailAddress: '',
      },
      termsAgreed: false,
    };
  }

  handleOnChangeInput = (e) => {
    const { value, name } = e.target;
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [name]: value,
      },
    });
  };

  handleOnClickCheckBox = (termsAgreed) => {
    this.setState({
      termsAgreed,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { handleSubmit } = this.props;
    const { form, termsAgreed } = this.state;
    if (termsAgreed) handleSubmit(form);
    return false;
  };

  render() {
    const {
      termsAgreed, form: { firstname, lastname, emailAddress },
    } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm}>
        <fieldset>
          <div>
            <input onChange={this.handleOnChangeInput} className="input input--primary" name="firstname" placeholder="First name here" required value={firstname} />
            <input onChange={this.handleOnChangeInput} className="input input--primary" name="lastname" placeholder="Last name here" required value={lastname} />
            <input onChange={this.handleOnChangeInput} className="input input--primary" name="emailAddress" placeholder="Email address here" type="email" required value={emailAddress} />
            <label htmlFor="agreement" className="input-label">
              <input onClick={this.handleOnClickCheckBox} id="agreement" className="checkbox" type="checkbox" value={termsAgreed} required />
              Do you agree to the <a className="competition-page__link" href="/fifa-e-world-up-terms">terms & conditions</a>?
            </label>
          </div>
          <Button secondary type="submit"> Apply Now</Button>
        </fieldset>
      </form>
    );
  }
}

CompetitionForm.propTypes = {
  handleSubmit: PropTypes.func,
};
export default CompetitionForm;
