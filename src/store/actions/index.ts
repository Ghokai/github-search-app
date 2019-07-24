import { Dispatch } from "redux";
import axios from "axios";

import {
  REPOSITORIES_LOADING_ACTION,
  REPOSITORIES_ERROR_ACTION,
  REPOSITORIES_SUCCESS_ACTION,
  REPOSITORIES_ERROR_ACTION_TYPE,
  REPOSITORIES_LOADING_ACTION_TYPE,
  REPOSITORIES_SUCCESS_ACTION_TYPE
} from "./actionTypes";

import RepositoryModel from "../models/RepositoryModel";

const getGithubRepositoriesApiEndPoint = (
  termString: string,
  pageSize: number,
  pageNumber: number
) =>
  `https://api.github.com/search/repositories?q=${termString}&sort=stars&order=desc&per_page=${pageSize}&page=${pageNumber}`;

export const fetchRepositories = (
  searchTerm: string,
  pageNumber: number = 1
) => async (dispatch: Dispatch) => {
  const actionLoading: REPOSITORIES_LOADING_ACTION = {
    type: REPOSITORIES_LOADING_ACTION_TYPE,
    payload: searchTerm
  };

  dispatch(actionLoading);

  try {
    const pageSize = 10;
    const apiUrl = getGithubRepositoriesApiEndPoint(
      searchTerm,
      pageSize,
      pageNumber
    );

    const response = await axios.get(apiUrl);

    const items: RepositoryModel[] = response.data.items.map(
      (repo: any): RepositoryModel => {
        return {
          Id: repo.id,
          Name: repo.name,
          Url: repo.html_url,
          OwnerName: repo.owner.login,
          OwnerUrl: repo.owner.html_url,
          OwnerAvatar: repo.owner.avatar_url,
          StarCount: repo.stargazers_count,
          Language: repo.language
        };
      }
    );

    const isLastPage =
      (pageNumber - 1) * pageSize + response.data.items.length >=
      response.data.total_count;

    const actionSucces: REPOSITORIES_SUCCESS_ACTION = {
      type: REPOSITORIES_SUCCESS_ACTION_TYPE,
      payload: {
        items,
        pageNumber,
        isLastPage
      }
    };
    dispatch(actionSucces);
  } catch (error) {
    const actionError: REPOSITORIES_ERROR_ACTION = {
      type: REPOSITORIES_ERROR_ACTION_TYPE,
      payload: error
    };
    dispatch(actionError);
  }
};
