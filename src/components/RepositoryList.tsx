import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store";
import RepositoryModel from "../store/models/RepositoryModel";
import RepositoryItem from "./RepositoryItem";
import styled from "styled-components";

const RepoDeck = styled.div`
  display: -webkit-flex; /* Safari */
  -webkit-flex-wrap: wrap; /* Safari 6.1+ */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const RepositoryList: React.FC = (): React.ReactElement => {
  const { items } = useSelector((state: AppState) => state.repositories);

  const repos = items.map((repo: RepositoryModel) => (
    <RepositoryItem key={repo.Id.toString()} {...repo} />
  ));

  return <RepoDeck>{repos}</RepoDeck>;
};

export default RepositoryList;
