import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  orderCake,
  restockCake,
} from '../../redux/actionCreators/cakeActionCreators';
import {
  orderIcecream,
  restockIcecream,
} from '../../redux/actionCreators/icecreamActionCreators';
import {fetchUsers} from '../../redux/actionCreators/userDataAsyncActionCreator';

import * as CakeActions from '../../reduxToolkit/slices/cakeSlice';
import * as IcecreamActions from '../../reduxToolkit/slices/icecreamSlice';
import * as UserActions from '../../reduxToolkit/slices/userSlice';

const HomeScreen = () => {
  const {width} = useWindowDimensions();

  const dispatch = useDispatch();
  const cakeData = useSelector(state => state.cake);
  const icecreamData = useSelector(state => state.icecream);
  const usersData = useSelector(state => state.users);

  const onCakeOrder = () => {
    // dispatch(CakeActions.ordered());
    dispatch(orderCake()); // Normal Redux
  };
  const onCakeRestock = () => {
    dispatch(CakeActions.restocked(1));
    dispatch(restockCake(1)); // Normal Redux
  };

  const onIcecreamOrder = () => {
    // dispatch(IcecreamActions.ordered());
    dispatch(orderIcecream()); // Normal Redux
  };
  const onIcecreamRestock = () => {
    // dispatch(IcecreamActions.restocked(1));
    dispatch(restockIcecream(1)); // Normal Redux
  };
  const onFetchUsersTap = () => {
    // dispatch(UserActions.fetchUsers());
    dispatch(fetchUsers()); // Normal Redux
  };

  return (
    <View style={styles.vwContainer}>
      <View style={[styles.vwContent, {width: width - 32}]}>
        {/* Qty View */}
        <View style={styles.vwItem}>
          <Text>{`${cakeData?.numOfCakes}`}</Text>
          <TouchableOpacity style={styles.btnItem} onPress={onCakeOrder}>
            <Text>{'ORDER CAKE'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={onCakeRestock}>
            <Text>{'RESTOCK CAKE'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.vwItem}>
          <Text>{`${icecreamData?.numOfIceCreams}`}</Text>
          <TouchableOpacity style={styles.btnItem} onPress={onIcecreamOrder}>
            <Text>{'ORDER ICECREAM'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem} onPress={onIcecreamRestock}>
            <Text>{'RESTOCK CAKE'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.vwUserContent, {width: width - 32}]}>
        <Text>{usersData?.users.join(', ')}</Text>
        <TouchableOpacity
          disabled={usersData?.loading}
          style={styles.btnItem}
          onPress={onFetchUsersTap}>
          {usersData?.loading && (
            <ActivityIndicator
              animating
              size={'small'}
              style={{marginRight: 8}}
            />
          )}
          <Text>{'FETCH USERS'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  vwContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vwContent: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: 16,
    backgroundColor: 'red',
    justifyContent: 'space-between',
    padding: 16,
  },
  vwUserContent: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: 'red',
  },
  vwItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnItem: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 4,
    marginTop: 8,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
