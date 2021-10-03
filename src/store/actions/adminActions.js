import { getAllCode } from 'services/userService';
import actionTypes from './actionTypes';

export const getAllCodeStart = (type) => async (dispatch, setState) => {
  dispatch({ type: actionTypes.GET_ALLCODE_START });
  try {
    const res = await getAllCode(type);
    if (res && res.errCode === 0) dispatch(getAllCodeSuccess(res.data));
  } catch (error) {
    dispatch(getAllCodeFail(error));
    console.log('error: ', error);
  }
};
export const getAllCodeSuccess = (data) => ({
  type: actionTypes.GET_ALLCODE_SUCCESS,
  payload: data,
});
export const getAllCodeFail = (err) => ({
  type: actionTypes.GET_ALLCODE_FAIL,
  payload: err,
});
