import * as React from "react";
import RepositoryModel from "../store/models/RepositoryModel";
import styled from "styled-components";
import { Icon } from "antd";

const RepoCard = styled.div`
  width:45%
  display: flex;
  margin: 10px;
  padding: 10px;
  border: 1px solid grey;
  justify-content: space-between;
  border-radius: 10px;
`;

const ImgPart = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  text-align: center;
`;
const LinkPart = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

const StatisticPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StickySpan = styled.span`
  text-align: right;
`;

const RepositoryItem: React.FC<RepositoryModel> = ({
  Name,
  OwnerAvatar,
  OwnerName,
  OwnerUrl,
  StarCount,
  Url,
  Language
}: RepositoryModel): React.ReactElement => {
  return (
    <RepoCard>
      <ImgPart>
        <img src={OwnerAvatar} width="75" height="75" />

        <span>
          <a href={OwnerUrl}>{OwnerName}</a>
        </span>
      </ImgPart>
      <LinkPart>
        <p>
          <a href={Url}>{Name}</a>
        </p>
      </LinkPart>
      <StatisticPart>
        <StickySpan>
          {StarCount}
          <Icon type="star" theme="filled" />
        </StickySpan>
        <StickySpan>
          {Language ? Language : "N/A"}
          <Icon type="code" theme="filled" />
        </StickySpan>
      </StatisticPart>
    </RepoCard>
  );
};

export default RepositoryItem;
