import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons';

import {ListItem, ListItemTitle} from '../../components/StyledComponents';
import selectors from '../../redux/selectors';
import {setTheme} from '../../redux/actions/appActions';

function ThemeItem({theme, isLast}) {
  const {name, color} = theme;
  const dispatch = useDispatch();
  const appliedTheme = useSelector(selectors.getTheme);
  return (
    <ListItem
      isLast={isLast}
      onPress={() => {
        dispatch(setTheme(theme));
      }}>
      <ListItemTitle color={color}>{name}</ListItemTitle>
      <FontAwesomeIcon
        icon={color === appliedTheme.color ? faCheckCircle : faCircle}
        style={{color}}
        size={22}
      />
    </ListItem>
  );
}

ThemeItem.propTypes = {
  theme: PropTypes.object,
  isLast: PropTypes.bool,
};

export default ThemeItem;
