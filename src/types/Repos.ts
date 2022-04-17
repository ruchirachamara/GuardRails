export interface IRepoProps {
    name?: string;
    lists?: any[];
    id?: string;
};

export interface ICard {
    text?: string;
    id?: string;
}

export interface IList {
    title?: string;
    cards?: any[];
    id?: string;
}