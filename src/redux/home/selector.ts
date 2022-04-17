import { createSelector } from 'reselect';

export const selectRepo = (state: any) => state;

export const selectRepoList = createSelector(
    selectRepo, (reposState): {id: string, name: string, lists: []}[] => reposState.repos.result
);

export const selectIsRepo = createSelector(
    selectRepo,
    (repos): boolean => repos.isLoading,
);

export const selectRepoById = (repoId: string) => createSelector(selectRepoList, repos => repos.find(repo => repo.id === repoId));
