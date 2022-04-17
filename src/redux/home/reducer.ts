import * as actionTypes from './types';

type stateProps = {
    result: Array<any>;
    isLoading: boolean;
    isSuccess: boolean;
};

type actionProps = {
    type: string;
    payload?: stateProps | [];
};

const INITIAL_STATE: stateProps = {
    result: [],
    isLoading: false,
    isSuccess: false,
};

const repoReducer = (
    state: stateProps = INITIAL_STATE,
    action: actionProps,
) => {
    const { payload = [] } = action;
    switch (action.type) {
        case actionTypes.REPO_RESET_STATE:
            return INITIAL_STATE;
        case actionTypes.LIST_ALL_REPO_REQUEST_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.LIST_ALL_REPO_REQUEST_LOADING_SUCCESS:
            return {
                result: payload,
                isLoading: false,
                isSuccess: false,
            };
        case actionTypes.LIST_ALL_REPO_REQUEST_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
            };
        case actionTypes.REPO_REQUEST_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.REPO_REQUEST_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                result: payload,
            };
        case actionTypes.REPO_REQUEST_LOADING_FAILURE:
            return {
                isLoading: false,
                isSuccess: false,
            };
        case actionTypes.REPO_ADD_NEW_REPO_REQUEST_LOADING:
            return {
                ...state,
                isLoading: true,
                isSuccess: true,
            };
        case actionTypes.REPO_ADD_NEW_REPO_REQUEST_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                result: payload, 
            };
        case actionTypes.REPO_ADD_NEW_REPO_REQUEST_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
            };
        case actionTypes.REPO_EDIT_REPO_REQUEST_LOADING:
            return {
                ...state,
                isLoading: true,
                isSuccess: true,
            };
        case actionTypes.REPO_EDIT_REPO_REQUEST_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                result: payload,
            };
        case actionTypes.REPO_EDIT_REPO_REQUEST_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
            };
        case actionTypes.REPO_LIST_CARD_ADD_NEW_LOADING:
            return {
                ...state,
                isLoading: true,
                isSuccess: true,
            };
        case actionTypes.REPO_LIST_CARD_ADD_NEW_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                result: payload,
            };
        case actionTypes.REPO_LIST_CARD_ADD_NEW_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
            };
        case actionTypes.REPO_LIST_CARD_EDIT_LOADING:
            return {
                ...state,
                isLoading: true,
                isSuccess: true,
            };
        case actionTypes.REPO_LIST_CARD_EDIT_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                result: payload,
            };
        case actionTypes.REPO_LIST_CARD_EDIT_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
            };
        case actionTypes.REPO_LIST_CARD_DELETE_LOADING:
            return {
                ...state,
                isLoading: true,
                isSuccess: true,
            };
        case actionTypes.REPO_LIST_CARD_DELETE_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                result: payload,
            };
        case actionTypes.REPO_LIST_CARD_DELETE_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
            };
        case actionTypes.REPO_LIST_CARD_TITLE_UPDATE_REQUEST_LOADING:
            return {
                ...state,
                isLoading: true,
                isSuccess: true,
            };
        case actionTypes.REPO_LIST_CARD_TITLE_UPDATE_REQUEST_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                result: payload,
            };
        case actionTypes.REPO_LIST_CARD_TITLE_UPDATE_REQUEST_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
            };
        default: {
            return state;
        }
    }
};

export default repoReducer;
