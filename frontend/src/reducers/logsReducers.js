import {
  LOGS_LIST_FAIL,
  LOGS_LIST_REQUEST,
  LOGS_LIST_SUCCESS,
  LOGS_UPDATE_FAIL,
  LOGS_UPDATE_REQUEST,
  LOGS_UPDATE_SUCCESS,
  LOGS_CREATE_FAIL,
  LOGS_CREATE_REQUEST,
  LOGS_CREATE_SUCCESS,
  LOGS_DELETE_FAIL,
  LOGS_DELETE_REQUEST,
  LOGS_DELETE_SUCCESS,
} from "../constants/logsConstants";

export const logListReducer = (state = { logs: [] }, action) => {
  switch (action.type) {
    case LOGS_LIST_REQUEST:
      return { loading: true };
    case LOGS_LIST_SUCCESS:
      return { loading: false, logs: action.payload };
    case LOGS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const logCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGS_CREATE_REQUEST:
      return { loading: true };
    case LOGS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case LOGS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const logDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGS_DELETE_REQUEST:
      return { loading: true };
    case LOGS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case LOGS_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const logUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGS_UPDATE_REQUEST:
      return { loading: true };
    case LOGS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case LOGS_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
