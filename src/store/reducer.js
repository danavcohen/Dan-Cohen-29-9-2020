import { Favorite } from "../modal/classes";
import ActionTypes from "./ActionTypes";

const initialState = {
    isCelsius: true,
    favorites: [],
    currentCity: 'Tel Aviv',
    showErrorModal: false,
    errorMessage: '',

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_TEMPERATURE_TYPE:
            return {
                ...state,
                isCelsius: !state.isCelsius,
            }
        case ActionTypes.ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.favorite]
            }

        case ActionTypes.REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(fav => fav.key !== action.key)
            }

        case ActionTypes.SET_CURRENT_CITY:
            return {
                ...state,
                currentCity: action.name,
            }
        case ActionTypes.CLOSE_ERROR_MODAL:
            return {
                ...state,
                showErrorModal: action.showErrorModal,
                errorMessage: '',
            }
        case ActionTypes.SET_ERROR_MODAL:
            return {
                ...state,
                showErrorModal: action.showErrorModal,
                errorMessage: action.errorMessage,
            }

    }
    return state;

}

export default reducer;