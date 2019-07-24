import { REPOSITORIES_ERROR_ACTION_TYPE, REPOSITORIES_LOADING_ACTION_TYPE, REPOSITORIES_SUCCESS_ACTION_TYPE } from "../actions/actionTypes";
import RepositoryModel from "../models/RepositoryModel";


interface IRepositoryReducerState {
  items: RepositoryModel[];
  isLastPage: boolean;
  pageNumber: number;
  isLoading: boolean;
  hasError: boolean;
  searchTerm: string;
  error: Error;
}

const defaultReducerState: IRepositoryReducerState = {
  items: [],
  isLastPage: false,
  pageNumber: 0,
  isLoading: false,
  hasError: false,
  searchTerm: "",
  error: null
};

export const RepositoriesReducer = (
  state: IRepositoryReducerState = defaultReducerState,
  action: any
): IRepositoryReducerState => {
  switch (action.type) {
    case REPOSITORIES_LOADING_ACTION_TYPE:
      return {
        ...state,
        items: [],
        isLoading: true,
        hasError: false,
        searchTerm: action.payload,
        error: null
      };

    case REPOSITORIES_SUCCESS_ACTION_TYPE:
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    case REPOSITORIES_ERROR_ACTION_TYPE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload
      };
    default:
      return state;
  }
};
