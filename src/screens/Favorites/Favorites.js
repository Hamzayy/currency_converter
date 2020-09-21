import React from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {faStar} from '@fortawesome/free-solid-svg-icons';

import {
  FlatList,
  Icon,
  ListItem,
  ListItemTitle,
  Screen,
} from '../../components/StyledComponents';
import {THEMES_MAP} from '../../constants';
import selectors from '../../redux/selectors';

function Favorites() {
  const theme = useSelector(selectors.getTheme);
  const favorites = useSelector(selectors.getFavorites);
  const data = Object.values(favorites);
  return (
    <ScrollView>
      <Screen paddingTop="0" marginTop="-10">
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <ListItem isLast={index === data.length - 1} key={item.code}>
              <ListItemTitle color="#000">
                {item.code} ({item.symbol_native})
              </ListItemTitle>
              <Icon
                icon={faStar}
                color={favorites[item.code] ? THEMES_MAP.Gold.color : '#ccc'}
                size={22}
                style={{marginLeft: -2, marginRight: 15}}
              />
            </ListItem>
          )}
          keyExtractor={(item) => item.code}
        />
      </Screen>
    </ScrollView>
  );
}

export default Favorites;
