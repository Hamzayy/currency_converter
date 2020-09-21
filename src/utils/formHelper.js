  
export const isEmail = email => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase())
    ? undefined
    : 'Invalid email address';
};

export const isValidPassword = password => {
  const regex = /^(?=.{8,})/;
  return regex.test(String(password))
    ? undefined
    : 'Password must be atleast 8 digits';
};

export const isRequired = value =>
  String(value || '').trim() ? undefined : 'Required';