import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import useScreenTransform from '../../hooks/useScreenTransform';
import selectors from '../../redux/selectors';
import {login as loginAction} from '../../redux/actions/appActions';
import LoginForm from '../../components/LoginForm';

function Login() {
  const theme = useSelector(selectors.getTheme);
  const loading = useSelector(selectors.getLoginLoading);
  const dispatch = useDispatch();

  const {inputContainerY} = useScreenTransform();

  return (
    <LoginForm
      inputContainerY={inputContainerY}
      loading={loading}
      theme={theme}
      onSubmit={(values) => {
        dispatch(loginAction.pending(values.email, values.password));
      }}
    />
  );
}

export default Login;
