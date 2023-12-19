import axios from "axios";
import {
  NEW_REGISTERATION_REQUEST,
  NEW_REGISTERATION_SUCCESS,
  NEW_REGISTERATION_FAIL,
  ALL_REGISTERATION_REQUEST,
  ALL_REGISTERATION_SUCCESS,
  ALL_REGISTERATION_FAIL,
  CLEAR_ERRORS,
} from "../constants/registerationConstants";
import { apiUrl } from "./apiUrl";

// Create registeration
export const createNewProjectRegisteration =
  (id, productData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_REGISTERATION_REQUEST });

      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.post(
        `${apiUrl}/api/v1/register/project/new/${id}`,
        productData,
        config
      );

      dispatch({
        type: NEW_REGISTERATION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_REGISTERATION_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// get all
export const getRegisterations = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_REGISTERATION_REQUEST });
    const { data } = await axios.get(`${apiUrl}/api/v1/admin/registerations`);

    dispatch({ type: ALL_REGISTERATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_REGISTERATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

//   Clear Errors:
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
