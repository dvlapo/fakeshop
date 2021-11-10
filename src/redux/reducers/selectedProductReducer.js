import { ActionTypes } from "../constants/action-types"

const initState = {
   product: {}
}

export const selectedProductReducer = (state = initState, {type, payload}) => {
   switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
         return {...state, ...payload}
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
         return {}
      default:
         return state;
   }
}