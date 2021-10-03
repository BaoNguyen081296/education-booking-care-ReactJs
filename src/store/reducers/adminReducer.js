import actionTypes from '../actions/actionTypes';

const initialState = {
  genders: [],
  roles: [],
  positions: [],
  isLoading: false,
};
const ROLE = 'ROLE';
const POSITION = 'POSITION';
const GENDER = 'GENDER';
const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALLCODE_START:
      return { ...state, isLoading: true };

    case actionTypes.GET_ALLCODE_SUCCESS:
      const data = action.payload;
      let genders = [...state.genders];
      let roles = [...state.roles];
      let positions = [...state.positions];
      data.forEach((item, _) => {
        switch (item.type) {
          case ROLE:
            roles = [...roles, item];
            break;
          case POSITION:
            positions = [...positions, item];
            break;
          case GENDER:
            genders = [...genders, item];
            break;
          default:
            break;
        }
      });
      return { ...state, isLoading: false, genders, positions, roles };

    case actionTypes.GET_ALLCODE_FAIL:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default adminReducer;
