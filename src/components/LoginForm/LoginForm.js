import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import PropTypes from 'prop-types';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import {LoginButton, FormInput, Screen} from '../StyledComponents';
import {isRequired, isEmail, isValidPassword} from '../../utils/formHelper';
import Header from '../Header';
import InputsContainer from '../InputContainer';

class LoginForm extends Component {
  render() {
    const {handleSubmit, inputContainerY, theme, loading} = this.props;
    return (
      <Screen backgroundColor={theme.color}>
        <Header />
        <InputsContainer translateY={inputContainerY}>
          <Field
            component={FormInput}
            name="email"
            inputProps={{
              placeholder: 'Email',
              keyboardType: 'email-address',
            }}
            theme={theme}
            icon={faUser}
          />
          <Field
            component={FormInput}
            name="password"
            inputProps={{
              placeholder: 'Password',
              secureTextEntry: true,
            }}
            theme={theme}
            icon={faLock}
          />

          <LoginButton
            onPress={handleSubmit}
            text="Login"
            loading={loading}
            color={theme.color}
          />
        </InputsContainer>
      </Screen>
    );
  }
}

const validate = (values) => {
  const errors = {};
  errors.email = isRequired(values.email) || isEmail(values.email);
  errors.password =
    isRequired(values.password) || isValidPassword(values.password);
  return errors;
};

LoginForm.propTypes = {
  inputContainerY: PropTypes.object,
  theme: PropTypes.object,
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool
}

LoginForm = connect(null, {})(LoginForm);

LoginForm = reduxForm({form: 'LoginForm', validate})(LoginForm);

export default LoginForm;
