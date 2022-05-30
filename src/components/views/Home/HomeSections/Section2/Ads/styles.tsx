import styled from 'styled-components';


export const AdContainer = styled.div`
  width: 82%;
  height: 280px;
  background: rgb(145,44,44);
  background: linear-gradient(90deg, rgba(145,44,44,1) 50%, rgba(107,9,9,1) 98%);
  display: flex;
  
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0 2rem 7rem;

  h3 {
    font-size: 2.5rem;
    color: #fff;
    margin: 0;
  }

  p {
    font-size: 1.5rem;
    color: #fff;
    margin: 1rem 0;
    font-weight: 200;
  }
`

export const ImageContainer = styled.div`

  img {
    width: 100%;
  }
`