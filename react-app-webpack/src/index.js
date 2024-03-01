import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "../public/favicon.jpg";

import App from "./Components/App";
import RootReducer from "./Components/Store/Reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const defaultReducer = combineReducers({
	RootReducer: RootReducer,
});

const store = createStore(defaultReducer, composeWithDevTools(
	applyMiddleware(thunk)
));

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
