import axios from "axios";
import {
  ALL_PROJECT_FAIL,
  ALL_PROJECT_REQUEST,
  ALL_PROJECT_SUCCESS,
  NEW_PROJECT_FAIL,
  NEW_PROJECT_REQUEST,
  NEW_PROJECT_SUCCESS,
  PROJECT_DETAILS_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/projectConstants";
import { apiUrl } from "./apiUrl";

// Create Project
export const createProject = (projectData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PROJECT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `${apiUrl}/api/v1/project/new`,
      projectData,
      config
    );

    dispatch({
      type: NEW_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All

export const getProject = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PROJECT_REQUEST });
    const { data } = await axios.get(`${apiUrl}/api/v1/projects`);

    dispatch({ type: ALL_PROJECT_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ALL_PROJECT_FAIL, payload: error.response.data.message });
  }
};

// Get Property Details
export const getProjectDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_DETAILS_REQUEST });

    const { data } = await axios.get(`${apiUrl}/api/v1/project/${id}`);
    dispatch({
      type: PROJECT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//   Clear Errors:
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
