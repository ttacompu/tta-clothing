import  UserActionTypes  from "./user.type";
const INIT_STATE = {
  currentUser: null,
  error : null
};
const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error : null
      };
      case UserActionTypes.SIGNOUT_SUCCESS:
        return{
          ...state,
          currentUser : null,
          error : null
        }
    case UserActionTypes.SIGNOUT_FAIL:
    case UserActionTypes.SIGN_IN_FAIL:
    case UserActionTypes.SIGNUP_FAIL:
      return {
        ...state,
        error : action.payload
      }
    
    default:
      return state;
  }
};

export default userReducer;
