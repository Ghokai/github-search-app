import * as React from "react";
import styled from "styled-components";
import SearchPanel from "./SearchPanel";
import SearchResult from "./SearchResult";

const Container = styled.div`
  margin: 100px auto;
  width: 70%;
`;

const App: React.FC = (): React.ReactElement => {
  return (
    <Container>
      <SearchPanel />
      <div>
        <SearchResult />
      </div>
    </Container>
  );
};

export default App;
