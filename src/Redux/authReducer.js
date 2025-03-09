const initialState = {
    user: null, // ✅ Make sure this is defined
    isAuthenticated: false,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      case "LOGOUT":
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  };

  export default authReducer;