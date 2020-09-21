import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import {
  Screen,
  Title,
  RowFlex,
  InfoText,
  SwitchIconContainer,
} from '../../components/StyledComponents';
import Header from '../../components/Header';
import CurrencyInput from '../../components/CurrencyInput';
import InputsContainer from '../../components/InputContainer';
import {SCREENS} from '../../constants';
import useScreenTransform from '../../hooks/useScreenTransform';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faRandom} from '@fortawesome/free-solid-svg-icons';
import selectors from '../../redux/selectors';
import {
  switchCurrencies,
  setBaseCurrencyValue,
  setTargetCurrencyValue,
} from '../../redux/actions/currencyActions';

function Home({navigation}) {
  const theme = useSelector(selectors.getTheme);
  const baseCurrency = useSelector(selectors.getBaseCurrency);
  const targetCurrency = useSelector(selectors.getTargetCurrency);
  const baseCurrencyValue = useSelector(selectors.getBaseCurrencyValue);
  const exchangeRate = useSelector(selectors.getExchangeRate);
  const targetCurrencyValue = useSelector(selectors.getTargetCurrencyValue);
  const dispatch = useDispatch();

  const {inputContainerY} = useScreenTransform();

  return (
    <Screen backgroundColor={theme.color}>
      <Header />
      <InputsContainer translateY={inputContainerY}>
        <Title testID="main-title">Currency Converter</Title>
        <CurrencyInput
          code={baseCurrency}
          changeCurrency={(item) => {
            navigation.navigate(SCREENS.CURRENCIES, {
              title: 'Base Currency',
            });
          }}
          onChange={(value) => {
            dispatch(setBaseCurrencyValue(value));
          }}
          value={baseCurrencyValue}
        />
        <RowFlex justify="flex-start">
          <SwitchIconContainer
            onPress={() => dispatch(switchCurrencies.pending())}>
            <FontAwesomeIcon icon={faRandom} color={'white'} size={22} />
          </SwitchIconContainer>
        </RowFlex>

        <CurrencyInput
          code={targetCurrency}
          changeCurrency={(item) => {
            navigation.navigate(SCREENS.CURRENCIES, {
              title: 'Target Currency',
            });
          }}
          onChange={(value) => {
            dispatch(setTargetCurrencyValue(value));
          }}
          value={targetCurrencyValue}
        />
        <RowFlex marginTop={15}>
          {exchangeRate && (
            <InfoText>{`1 ${baseCurrency} = ${Number(exchangeRate).toFixed(
              3,
            )} ${targetCurrency} as of ${new Date()
              .toDateString()
              .slice(4, 10)}`}</InfoText>
          )}
        </RowFlex>
      </InputsContainer>
    </Screen>
  );
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
