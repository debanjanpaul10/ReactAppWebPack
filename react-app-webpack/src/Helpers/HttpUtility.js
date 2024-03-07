import axios from "axios";
import { TypiCodeApiUrl } from "./Constants";

/**
 * Gets all user details data
 * @returns {Promise} The Promise Object
 */
export const GetUsersDataAsync = async () => {
	const result = await axios.get(TypiCodeApiUrl);
	return result;
};

/**
 * Gets the user data by user id
 * @param {number} id The user id
 * @returns {Promise} The Promise Object
 */
export const GetUsersDataByIdAsync = async (id) => {
	const result = await axios.get(`${TypiCodeApiUrl}/${id}`);
	return result;
};
