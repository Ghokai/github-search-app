import * as React from "react";
import { Icon, Result, Button } from "antd";

const Welcome: React.FC = (): React.ReactElement => {
  const gotoRepo = () => {
    window.location.replace("https://github.com/ghokai");
  };

  return (
    <Result
      icon={<Icon type="smile" theme="twoTone" />}
      title="Welcome to Github Repository Search Application!"
      extra={
        <Button onClick={gotoRepo} type="primary">
          Visit Github Repository
        </Button>
      }
      status="info"
    />
  );
};

export default Welcome;
