import { Button, Icon, Tag } from "antd";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppState } from "../store";
import { fetchRepositories } from "../store/actions";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import RepositoryList from "./RepositoryList";
import Welcome from "./Welcome";
import InfoMessage from "./InfoMessage";

const ButtonsPanel = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const SearchResult: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();

  const {
    hasError,
    isLastPage,
    isLoading,
    items,
    pageNumber,
    searchTerm
  } = useSelector((state: AppState) => state.repositories);

  const goToPage = (page: number) =>
    dispatch(fetchRepositories(searchTerm, page));

  if (searchTerm === "") {
    return <Welcome />;
  } else if (isLoading) {
    return <Loading />;
  } else if (hasError) {
    return <ErrorMessage />;
  } else if (items.length === 0) {
    return <InfoMessage message="No Repository to Show" />;
  }

  return (
    <div>
      <ButtonsPanel>
        <Button
          disabled={pageNumber === 1}
          onClick={() => goToPage(pageNumber - 1)}
        >
          <Icon type="left" />
          Previous Page
        </Button>
        <Tag color="#87d068">Current Page:{pageNumber}</Tag>
        <Button disabled={isLastPage} onClick={() => goToPage(pageNumber + 1)}>
          Next Page
          <Icon type="right" />
        </Button>
      </ButtonsPanel>
      <RepositoryList />
    </div>
  );
};

export default SearchResult;
