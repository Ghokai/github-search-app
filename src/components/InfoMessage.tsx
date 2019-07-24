import { Result } from "antd";
import * as React from "react";

interface InfoMessageProps {
  message: string;
}

const InfoMessage: React.FC<InfoMessageProps> = ({
  message
}: InfoMessageProps): React.ReactElement => {
  return <Result status="info" title={message} />;
};

export default InfoMessage;
