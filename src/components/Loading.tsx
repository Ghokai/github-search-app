import * as React from "react";
import { Spin } from "antd";
import styled from "styled-components";

const SpinWrapper = styled.div`
  text-align: center;
  margin: 40px;
`;

const Loading: React.FC = (): React.ReactElement => {
  return (
    <SpinWrapper>
      <Spin tip="Loading..." />
    </SpinWrapper>
  );
};

export default Loading;
