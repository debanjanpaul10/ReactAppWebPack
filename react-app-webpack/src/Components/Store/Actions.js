import * as actionTypes from "./ActionTypes";
import {
	GetUsersDataAsync,
	GetUsersDataByIdAsync,
} from "../../Helpers/HttpUtility";

/**
 * Gets the Users data from the server
 * @returns {Promise} The Promise from the API response
 */
export const GetUsersDataApiAsync = () => {
	return async (dispatch) => {
		try {
			dispatch(StartLoader());
			const response = await GetUsersDataAsync();
			if (response && response.data) {
				dispatch(GetUsersDataApiAsyncSuccess(response.data));
			}
		} catch (error) {
			console.error(error);
		} finally {
			setTimeout(() => {
				dispatch(StopLoader());
			}, 2000);
		}
	};
};

/**
 * Saves the Users API data to redux store
 * @param {Object} data The data from the API
 * @returns {Object} The action type and payload data
 */
export const GetUsersDataApiAsyncSuccess = (data) => {
	return {
		type: actionTypes.GET_ABOUT_NAMES_JSON_DATA,
		payload: data,
	};
};

/**
 * Gets the Users data based on UserID from the server
 * @returns {Promise} The Promise from the API response
 */
export const GetUsersDataByIdApiAsync = (id) => {
	return async (dispatch) => {
		try {
			dispatch(StartModalLoader());
			const response = await GetUsersDataByIdAsync(id);
			if (response && response.data) {
				dispatch(GetUsersDataApiAsyncByIdSuccess(response.data));
			}
		} catch (error) {
			console.error(error);
		} finally {
			setTimeout(() => {
				dispatch(StopModalLoader());
			}, 2000);
		}
	};
};

/**
 * Saves the User API data to redux store
 * @param {Object} data The data from the API
 * @returns {Object} The action type and payload data
 */
export const GetUsersDataApiAsyncByIdSuccess = (data) => {
	return {
		type: actionTypes.GET_ABOUT_USER_JSON_DATA,
		payload: data,
	};
};

/**
 * Saves the loader start data to redux store
 * @returns {Object} The action type
 */
export const StartLoader = () => {
	return {
		type: actionTypes.LOADER_START,
	};
};

/**
 * Saves the loader stop data to redux store
 * @returns {Object} The action type
 */
export const StopLoader = () => {
	return {
		type: actionTypes.LOADER_STOP,
	};
};

export const StartModalLoader = () => {
	return {
		type: actionTypes.MODAL_LOADER_START,
	};
};

export const StopModalLoader = () => {
	return {
		type: actionTypes.MODAL_LOADER_STOP,
	};
};
