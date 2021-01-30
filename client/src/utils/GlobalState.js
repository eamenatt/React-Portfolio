import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_PROJECT,
  REMOVE_PROJECT,
  UPDATE_PROJECTS,
  LOADING,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    
    case SET_CURRENT_PROJECT:
      return {
        ...state,
        currentProject: action.currentProject,
        loading: false
      };

    case UPDATE_PROJECTS:
      return {
        ...state,
        projects: action.projects,
        loading: false
      };

    
    case REMOVE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((project) => {
          return project._id !== action._id;
        })
      };


    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentProject: {
      _id: 0,
      name: "",
      age: "",
      details: "",
      picture: "",
      availability: true
    },
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
