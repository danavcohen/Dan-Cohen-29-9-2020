import { Favorite } from '../modal/classes';
import actionTypes from './ActionTypes';

export const setCurrentCity = (name) => ({
    type: actionTypes.SET_CURRENT_CITY,
    name,
});

export const addToFavorites = (favorite) => {
    return ({
        type: actionTypes.ADD_TO_FAVORITES,
        favorite: new Favorite(favorite.key,favorite.name,favorite.weatherCondition,favorite.temperature),
    });
}

export const removeFromFavorites = (key) => ({
    type: actionTypes.REMOVE_FROM_FAVORITES,
    key: key,
});


export const changeTempType = () => ({
    type: actionTypes.CHANGE_TEMPERATURE_TYPE,
});

export const setErrorModal = (errorMessage) => ({
    type: actionTypes.SET_ERROR_MODAL,
    errorMessage,
    showErrorModal:true,
});


export const closeErrorModal = () => {
    console.log('here')
    return ({
    type: actionTypes.CLOSE_ERROR_MODAL,
    showErrorModal:false,
})};