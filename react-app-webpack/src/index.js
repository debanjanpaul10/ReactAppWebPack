import React from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";

import "../public/favicon.jpg";

import App from "./Components/App";
import RootReducer from "./Components/Store/Reducer";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const defaultReducer = combineReducers({
	RootReducer: RootReducer,
});

const store = configureStore({
	reducer: defaultReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
	devTools: true,
});

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
	<React.StrictMode>
		<MemoryRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</MemoryRouter>
	</React.StrictMode>
);
