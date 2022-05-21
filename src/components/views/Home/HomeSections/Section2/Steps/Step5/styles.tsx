import styled from "styled-components";


export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 0 0 5rem;

  & h3 {
    font-size: 1.8rem;
    color: #bcbcbc;
    margin: 0 0 1rem 0;
    font-weight: 400;
  }
  & h2 {
    font-size: 3.8rem;
    color: #585858;
    margin: 0 0 0.5rem 0;
    line-height: 1.2;
    font-weight: 600;

  }
  & p {
    font-size: 1rem;
    color: #57606a;
    margin: 0;
  }
  `
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  padding: 2.5rem 5rem 0 5rem; 
  
  & img {
    width: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;

  }
  `