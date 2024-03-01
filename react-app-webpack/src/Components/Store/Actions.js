import * as actionTypes from "./ActionTypes";
import { GetUsersDataAsync, GetUsersDataByIdAsync } from "../Helpers/HttpUtility";

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
			}, 3000)
		}
	};
};

export const GetUsersDataByIdApiAsync = (id) => {
	return async (dispatch) => {
		try {
			dispatch(StartLoader());
			const response = await GetUsersDataByIdAsync(id);
			if (response && response.data) {
				dispatch(GetUsersDataApiAsyncSuccess(response.data));
			}
		} catch (error) {
			console.error(error);
		} finally {
			setTimeout(() => {
				dispatch(StopLoader());
			}, 3000)
		}
	};
};

export const GetUsersDataApiAsyncSuccess = (data) => {
	return {
		type: actionTypes.GET_ABOUT_NAMES_JSON_DATA,
		payload: data,
	};
};

export const StartLoader = () => {
	return {
		type: actionTypes.LOADER_START,
	};
};

export const StopLoader = () => {
	return {
		type: actionTypes.LOADER_STOP,
	};
};
