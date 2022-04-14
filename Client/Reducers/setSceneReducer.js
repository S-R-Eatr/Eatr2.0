import * as types from '../constants/actionTypes.js';

const initState = {
  sceneState: 'home',
  isLoggedIn: false,
  isNewUser: false,
};

const setSceneReducer = (state = initState, action) => {
  let sceneState;
  switch (action.type) {
    case types.SET_SCENE: {
      sceneState = action.payload;
      return {
        ...state,
        sceneState,
      };
    }
    case types.GET_ISNEWUSER: {
      return{
        ...state,
        isNewUser: !(state.isNewUser)
      }
    }
    case types.SET_ISLOGGEDIN: {
      return {
        ...state,
        isLoggedIn: !(state.isLoggedIn)
      }
    }
    default: {
      return state;
    }
  }
};

export default setSceneReducer;
