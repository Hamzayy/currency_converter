import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {ListItem, ListItemTitle, IconCircle} from '../../components/StyledComponents';
import selectors from '../../redux/selectors';

function Option({title, icon, action, isLast}) {
  const theme = useSelector(selectors.getTheme);
  return (
    <ListItem onPress={action} isLast={isLast}>
      <ListItemTitle>{title}</ListItemTitle>
      <IconCircle>
        <FontAwesomeIcon icon={icon} color={theme.color} size={14} />
      </IconCircle>
    </ListItem>
  );
}

Option.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
  action: PropTypes.func.isRequired,
};

export default Option;
