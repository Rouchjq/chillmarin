import styled from "styled-components";

export const Section1Container = styled.div`
  height: 550px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Textsbox = styled.div`
  padding: 0px 50px 0 150px;
`;

export const Titlebox = styled.div`
  & > h1 {
    font-size: 4rem;
    margin: 0;
    color: #3828cf;
  }
`;

export const Textbox = styled.div`
  & > p {
    font-size: 1.2rem;
    margin: 20px 0px;
  }
`;

export const ImgContainer = styled.div`
  width: 40%;
  padding: 50px 130px 0 50px;
  & img {
    width: 100%;
  }
`;
