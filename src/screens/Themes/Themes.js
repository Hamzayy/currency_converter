import React from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {Screen} from '../../components/StyledComponents';
import ThemeItem from './Theme';
import {THEMES} from '../../constants';

function Themes() {
  return (
    <ScrollView>
      <Screen>
        {THEMES.map((theme, index) => (
          <ThemeItem
            theme={theme}
            isLast={index === THEMES.length - 1}
            key={theme.name}
          />
        ))}
      </Screen>
    </ScrollView>
  );
}

Themes.propTypes = {
  navigation: PropTypes.object,
};

export default Themes;
