import styled from 'styled-components';


export const SkewContainer = styled.div`
width: 100%;
height: 15vh;
background: rgb(10, 13, 54);
  background: linear-gradient(
    90deg,
    rgba(10, 13, 54, 1) 40%,
    rgba(25, 39, 83, 1) 90%
  );
transform: skewY(-4deg);
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  background: rgb(10, 13, 54);
  background: linear-gradient(
    90deg,
    rgba(10, 13, 54, 1) 40%,
    rgba(25, 39, 83, 1) 90%
  );
  h1 {
    color: #fff;
    font-size: 7rem;
    font-weight: 500;
  }
  transform: translateY(-6vh);
`;
