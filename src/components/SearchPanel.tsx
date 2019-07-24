import * as React from "react";
import { Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRepositories } from "../store/actions";

const { Search } = Input;

const SearchPanel: React.FC = (): React.ReactElement => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <Search
        onChange={e => setSearchText(e.target.value)}
        placeholder="search in github repositories"
        onSearch={value => dispatch(fetchRepositories(value))}
        value={searchText}
      />
    </div>
  );
};

export default SearchPanel;
