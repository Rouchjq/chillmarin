import styled from "styled-components";

export const NavbarContainer = styled.div`
  //1 pulgar==4rem
  padding: 20px 0 20px 0;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 9%;
  padding-left: 4rem;
  & > img {
    width: 100%;
  }
`;

export const MenuContainer = styled.div`
  width: 9%;
  padding-right: 1rem;
  & img {
    width: 90%;
  }
`;
