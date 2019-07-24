import { Result } from "antd";
import * as React from "react";

const InfoMessage: React.FC = (): React.ReactElement => {
  return <Result status="info" title="No Repository to Show" />;
};

export default InfoMessage;
