import {
  LOGS_CREATE_FAIL,
  LOGS_CREATE_REQUEST,
  LOGS_CREATE_SUCCESS,
  LOGS_DELETE_FAIL,
  LOGS_DELETE_REQUEST,
  LOGS_DELETE_SUCCESS,
  LOGS_LIST_FAIL,
  LOGS_LIST_REQUEST,
  LOGS_LIST_SUCCESS,
  LOGS_UPDATE_FAIL,
  LOGS_UPDATE_REQUEST,
  LOGS_UPDATE_SUCCESS,
} from "../constants/logsConstants";
import axios from "axios";

export const listLogs = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LOGS_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/logs`, config);

    dispatch({
      type: LOGS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: LOGS_LIST_FAIL,
      payload: message,
    });
  }
};

export const createLogAction =
  (date_applied, operator, location, holes_treated, chemicals, notes) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: LOGS_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/logs/create`,
        { date_applied, operator, location, holes_treated, chemicals, notes },
        config
      );

      dispatch({
        type: LOGS_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: LOGS_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteLogAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: LOGS_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/logs/${id}`, config);

    dispatch({
      type: LOGS_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: LOGS_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateLogAction =
  (id, date_applied, operator, location, holes_treated, chemicals, notes) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: LOGS_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/logs/${id}`,
        { date_applied, operator, location, holes_treated, chemicals, notes },
        config
      );

      dispatch({
        type: LOGS_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: LOGS_UPDATE_FAIL,
        payload: message,
      });
    }
  };
