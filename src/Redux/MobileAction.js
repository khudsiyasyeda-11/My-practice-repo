import { ADD_MOBILE } from "./AddMobile";
import { BUY_MOBILE } from "./MobileType";
export const buyMobile = () => {
  return {
    type: BUY_MOBILE,
  };
};
const initialStock = {
  mobiles: 10,
};

export const mobileReducer = (state = initialStock, action) => {
  switch (action.type) {
    case BUY_MOBILE:
      return {
        ...state,
        mobiles: state.mobiles - 1,
      };
    case ADD_MOBILE:
      return {
        ...state,
        mobiles: state.mobiles + 1,
      };
    default:
      return state;
  }
};
