import {
    LOADER_START,
    LOADER_STOP,
    GET_ABOUT_NAMES_JSON_DATA
} from "../Store/ActionTypes";

const initialState = {
    namesData: [],
    isLoading: true,
} 

const reducer = (state = initialState, action = null) => {
    try {
        switch(action.type) {
            case GET_ABOUT_NAMES_JSON_DATA: {
                return {
                    ...state,
                    namesData: action.payload
                }
            }
            case LOADER_START: {
                return {
                    ...state,
                    isLoading: true
                }
            }
            case LOADER_STOP: {
                return {
                    ...state,
                    isLoading: false
                }
            }
            default: {
                return {
                    ...state
                }
            }
        }
    } catch (error) {
        console.error(error);
    }
}

export default reducer;