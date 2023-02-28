import {Action, Dispatch} from 'redux';
import * as actionTypes from './actionTypes';
import getCollectionList from './api';

export const getCollectionAction = () => {
  return (dispatch: Dispatch): Promise<Action> => {
    dispatch({type: actionTypes.GET_COLLECTION_LIST_REQUEST});

    return getCollectionList()
      .then(payload => {
        return dispatch({
          type: actionTypes.GET_COLLECTION_LIST_SUCCESS,
          payload,
        });
      })
      .catch(() => {
        return dispatch({type: actionTypes.GET_COLLECTION_LIST_FAILURE});
      });
  };
};
