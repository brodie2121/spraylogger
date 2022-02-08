import {
  LOGS_LIST_FAIL,
  LOGS_LIST_REQUEST,
  LOGS_LIST_SUCCESS,
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
