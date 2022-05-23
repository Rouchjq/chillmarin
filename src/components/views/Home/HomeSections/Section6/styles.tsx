import styled from 'styled-components';

interface SwitchProps {
  status?: boolean;
}

export const ContactContainer = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactSwitch = styled.div`
  display: flex;
  padding-top: 3rem;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 500;
`;

export const ContactSwitchTextLeft = styled.div<SwitchProps>`
  width: 30%;
  font-size: 2rem;
  color: ${(props) => (props.status ? '#C6C6C6' : '#727272')};
`;

export const ContactSwitchTextRight = styled.div<SwitchProps>`
  width: 30%;
  font-size: 2rem;
  line-height: 1.2;
  color: ${(props) => (props.status ? '#727272' : '#C6C6C6')};
`;

export const TextContainer = styled.div`
  margin-top: 2rem;

  p {
    font-size: 1.4rem;
    color: #161B5D;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
