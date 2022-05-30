import styled from 'styled-components';


export const TextContainer = styled.div`

  padding: 2rem 8rem;

  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    text-align: center;
    color: #161B5D;
    margin: 1rem;
  }
  p {
    font-size: 1.1rem;
    color: #57606a;
    margin: 0;
    text-align: center;

  }
`

export const ProfileContainer = styled.div`
  width: 25%;
  height: 300px;
  display: flex;
  overflow: hidden;
  position: relative;
  transition: all 0.5s ease-in-out;
  background-color: #000;

  &:hover {
    transform: scale(1.08);
    z-index: 9;
    box-shadow: 0 0 0.5rem 0.3rem rgba(0, 0, 0, 0.2);
    & p {
      transform: translateY(0px);
    }

    & span {
      transform: translateY(0px);
    }

    & img {
      transition: all 0.3s ease-in-out;
      opacity: 0.6;
    }
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
  }

  p {
    position: absolute;
    bottom: 6%;
    left: 10%;
    z-index: 99;
    color: #fff;
    transform: translateY(60px);
    transition: all 0.5s ease-in-out;
    font-weight: 300;
  }

  span {
    position: absolute;
    bottom: 5%;
    left: 10%;
    z-index: 99;
    color: #fff;
    transform: translateY(60px);
    transition: all 0.5s ease-in-out;
  }
`;
