import { Result } from "antd";
import * as React from "react";
import { AppState } from "../store/index";
import { useSelector } from "react-redux";

const ErrorMessage: React.FC = (): React.ReactElement => {
  const error = useSelector((state: AppState) => state.repositories.error);

  return <Result status="error" title={error.name} subTitle={error.message} />;
};

export default ErrorMessage;
