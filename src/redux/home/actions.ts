import { Dispatch } from 'redux';

import * as actionTypes from './types';
import { request } from '../../request';
import { IRepoProps } from '../../types/Repos';

export const RepoActions = {
    resetState: () => async (dispatch: Dispatch<any>) => {
        dispatch({
            type: actionTypes.REPO_RESET_STATE,
        });
    },
    listAllRepoState: () => async (dispatch: Dispatch<any>) => {
        dispatch({
            type: actionTypes.LIST_ALL_REPO_REQUEST_LOADING,
        });
        const data = await request.get('/api/repo');
        if (data.success === true) {
            let results: any[] = [];
            data.result.repos.map((item: IRepoProps): void => {
                results.push({
                    name: item.name,
                    id: item.id,
                    lists: item.lists,
                });
            });
            dispatch({
                type: actionTypes.LIST_ALL_REPO_REQUEST_LOADING_SUCCESS,
                payload: results,
            });
        } else {
            dispatch({
                type: actionTypes.REPO_REQUEST_LOADING_FAILURE,
            });
        }
    },
    loadRepoState: (id: string) => async (dispatch: Dispatch<any>) => {
        dispatch({
            type: actionTypes.REPO_REQUEST_LOADING,
        });
        const data = await request.get(`/api/repo/${id}`);
        if (data.success === true) {
            let results: any[] = [];
            data.result.map((item: IRepoProps): void => {
                results.push({
                    name: item.name,
                    id: item.id,
                    lists: item.lists,
                });
            });
            dispatch({
                type: actionTypes.REPO_REQUEST_LOADING_SUCCESS,
                payload: results,
            });
        } else {
            dispatch({
                type: actionTypes.REPO_REQUEST_LOADING_FAILURE,
            });
        }
    },
    addNewRepoState: (repo: any) => async (dispatch: Dispatch<any>) => {
        dispatch({
            type: actionTypes.REPO_ADD_NEW_REPO_REQUEST_LOADING
        });
        const data = await request.post('/api/repo', repo);
        if (data.success === true) {
            dispatch({
                type: actionTypes.REPO_ADD_NEW_REPO_REQUEST_LOADING_SUCCESS,
                payload: repo
            });            
        } else {
            dispatch({
                type: actionTypes.REPO_ADD_NEW_REPO_REQUEST_LOADING_FAILURE,
            });
        }
    },
    editRepoState: (repo: any) => async (dispatch: Dispatch<any>) => {
        dispatch({
            type: actionTypes.REPO_EDIT_REPO_REQUEST_LOADING
        });
        const data = await request.put(`/api/repo/${repo.id}`, repo);  
        if (data.success === true) {
            dispatch({
                type: actionTypes.REPO_EDIT_REPO_REQUEST_LOADING_SUCCESS,
                payload: repo
            });            
        } else {
            dispatch({
                type: actionTypes.REPO_EDIT_REPO_REQUEST_LOADING_FAILURE,
            });
        }
    },
    deleteRepoState: (id: string) => async (dispatch: Dispatch<any>) => {
        const data = await request.delete(`/api/repo/${id}`);  
        if (data.success === true) {
            dispatch({
                type: actionTypes.REPO_EDIT_REPO_REQUEST_LOADING_SUCCESS,
            });            
        } else {
            dispatch({
                type: actionTypes.REPO_EDIT_REPO_REQUEST_LOADING_FAILURE,
            });
        }
    },
    addNewCardState: (id: string, card: any) => async (dispatch: Dispatch<any>) => {
        dispatch({
            type: actionTypes.REPO_LIST_CARD_ADD_NEW_LOADING,
        });
        const data = await request.post(`/api/list/${id}/card/`, card);  
        if (data.success === true) {
            dispatch({
                type: actionTypes.REPO_LIST_CARD_ADD_NEW_LOADING_SUCCESS,
            });            
        } else {
            dispatch({
                type: actionTypes.REPO_LIST_CARD_ADD_NEW_LOADING_FAILURE,
            });
        }
    },
    editCardState: (card: any) => async (dispatch: Dispatch<any>) => {
        dispatch({
            type: actionTypes.REPO_LIST_CARD_ADD_NEW_LOADING,
        });
        const data = await request.put(`/api/card/${card.id}`, card);  
        if (data.success === true) {
            dispatch({
                type: actionTypes.REPO_LIST_CARD_ADD_NEW_LOADING_SUCCESS,
            });            
        } else {
            dispatch({
                type: actionTypes.REPO_LIST_CARD_ADD_NEW_LOADING_FAILURE,
            });
        }
    },
    deleteCardState: (id: string) => async (dispatch: Dispatch<any>) => {
        const data = await request.delete(`/api/card/${id}`);  
        if (data.success === true) {
            dispatch({
                type: actionTypes.REPO_EDIT_REPO_REQUEST_LOADING_SUCCESS,
            });            
        } else {
            dispatch({
                type: actionTypes.REPO_EDIT_REPO_REQUEST_LOADING_FAILURE,
            });
        }
    }, 
    editCardTitleState: (list: any) => async (dispatch: Dispatch<any>) => {
        dispatch({
            type: actionTypes.REPO_LIST_CARD_ADD_NEW_LOADING,
        });
        const data = await request.put(`/api/list/${list.id}`, list);  
        if (data.success === true) {
            dispatch({
                type: actionTypes.REPO_LIST_CARD_ADD_NEW_LOADING_SUCCESS,
            });            
        } else {
            dispatch({
                type: actionTypes.REPO_LIST_CARD_ADD_NEW_LOADING_FAILURE,
            });
        }
    },    
};
