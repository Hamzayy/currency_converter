import React, {useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCheckCircle,
  faStar,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import SearchBar from '../../components/SearchBar';
import {
  FlatList,
  Icon,
  FavoriteContainer,
  ListItem,
  ListItemTitle,
  Screen,
} from '../../components/StyledComponents';
import {CURRENCIES, THEMES_MAP} from '../../constants';
import {
  setBaseCurrency,
  setTargetCurrency,
} from '../../redux/actions/currencyActions';
import {toggleFavorite} from '../../redux/actions/appActions';
import selectors from '../../redux/selectors';

function CurrencyList({
  route: {
    params: {title},
  },
}) {
  const [data, setData] = useState(CURRENCIES);
  const filterData = useCallback(
    (search) => {
      const regex = new RegExp(search, 'i');
      setData(
        CURRENCIES.filter(
          (item) => regex.test(item.name) || regex.test(item.code),
        ),
      );
    },
    [CURRENCIES],
  );

  const baseCurrency = useSelector(selectors.getBaseCurrency);
  const targetCurrency = useSelector(selectors.getTargetCurrency);
  const theme = useSelector(selectors.getTheme);
  const favorites = useSelector(selectors.getFavorites);
  const currency = title === 'Base Currency' ? baseCurrency : targetCurrency;
  const setCurrency =
    title === 'Base Currency' ? setBaseCurrency : setTargetCurrency;
  const dispatch = useDispatch();

  const setFavorite = useCallback((item) => {
    dispatch(toggleFavorite(item));
  }, []);

  return (
    <Screen paddingTop="0">
      <SearchBar onChange={filterData} />
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <ListItem
            onPress={() => {
              dispatch(setCurrency(item.code));
            }}
            isLast={index === data.length - 1}
            key={item.code}>
            <FavoriteContainer>
              <TouchableOpacity
                underlayColor="#f9f9f9"
                onPress={() => setFavorite(item)}>
                <Icon
                  icon={faStar}
                  color={favorites[item.code] ? THEMES_MAP.Gold.color : '#ccc'}
                  size={22}
                  style={{marginLeft: -2, marginRight: 15}}
                />
              </TouchableOpacity>
              <ListItemTitle color="#000">
                {item.code} ({item.symbol_native})
              </ListItemTitle>
            </FavoriteContainer>

            <FontAwesomeIcon
              icon={currency === item.code ? faCheckCircle : faCircle}
              color={currency === item.code ? theme.color : '#ccc'}
              size={22}
            />
          </ListItem>
        )}
        keyExtractor={(item) => item.code}
      />
    </Screen>
  );
}

CurrencyList.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }),
};

export default CurrencyList;
