export const ORDER_CAKE = 'ORDER_CAKE';
export const RESTOCK_CAKE = 'RESTOCK_CAKE';

export const orderCake = () => {
  return {type: ORDER_CAKE};
};

export const restockCake = qty => {
  return {type: RESTOCK_CAKE, payload: qty};
};
