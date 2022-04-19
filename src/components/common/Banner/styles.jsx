import styled from "styled-components";

export const BannerContainer = styled.div`
  padding: 0px 0 0px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: rgb(44, 180, 139);
  background: linear-gradient(
    90deg,
    rgba(44, 180, 139, 1) 4%,
    rgba(76, 162, 180, 1) 65%,
    rgba(16, 46, 120, 1) 100%
  );
  & p {
    margin: 0;
    color: white;
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 25px;
  background-color: white;
  margin: 5px 0px;
`;
