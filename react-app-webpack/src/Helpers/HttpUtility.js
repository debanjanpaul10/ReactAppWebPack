import axios from "axios";

export const GetUsersDataAsync = async () => {
	const result = await axios.get("https://jsonplaceholder.typicode.com/users");
	return result;
};

export const GetUsersDataByIdAsync = async (id) => {
	const result = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${id}`
	);
	return result;
};

