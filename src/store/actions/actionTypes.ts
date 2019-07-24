import RepositoryModel from "../models/RepositoryModel";

export const REPOSITORIES_LOADING_ACTION_TYPE = "REPOSITORIES_LOADING";
export const REPOSITORIES_SUCCESS_ACTION_TYPE = "REPOSITORIES_SUCCESS";
export const REPOSITORIES_ERROR_ACTION_TYPE = "REPOSITORIES_ERROR";

export type REPOSITORIES_LOADING_ACTION = {
  type: string;
  payload: string;
};

export type REPOSITORIES_SUCCESS_ACTION = {
  type: string;
  payload: {
    items: RepositoryModel[];
    pageNumber: number;
    isLastPage: boolean;
  };
};

export class REPOSITORIES_ERROR_ACTION {
  type: string;
  payload: Error;
}

export type RepositoryAction =
  | REPOSITORIES_LOADING_ACTION
  | REPOSITORIES_SUCCESS_ACTION
  | REPOSITORIES_ERROR_ACTION;
