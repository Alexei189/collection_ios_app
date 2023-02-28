import * as actionTypes from './actionTypes';
import {IMainReducer, IMyCollection} from './types';

const initialState: IMainReducer = {
  collection: [],
  isLoading: false,
};

const reducer = (
  state: IMainReducer = initialState,
  action: {type: any; payload: IMyCollection[]},
): IMainReducer => {
  switch (action.type) {
    case actionTypes.GET_COLLECTION_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_COLLECTION_LIST_SUCCESS:
      const collection = action.payload as IMyCollection[];

      return {
        collection,
        // timestamp: new Date().toISOString(),
        isLoading: false,
      };

    case actionTypes.GET_COLLECTION_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
