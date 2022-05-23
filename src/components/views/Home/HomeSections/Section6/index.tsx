import { useState } from 'react';
import {
  ContactContainer,
  ContactSwitch,
  ContactSwitchTextLeft,
  ContactSwitchTextRight,
  TextContainer,
} from './styles';
import { BasicSwitch } from './Switch';

export const Section6 = () => {
  const [switchStatus, setSwitchStatus] = useState(false);
  const handleSwitch = (e: any) => {
    setSwitchStatus(e.target.checked);
  };

  return (
    <>
      <ContactContainer>
        <ContactSwitch>
          <ContactSwitchTextLeft status={switchStatus}>
            Contactanos
          </ContactSwitchTextLeft>
          <BasicSwitch onChange={handleSwitch} checked={switchStatus} />
          <ContactSwitchTextRight status={switchStatus}>
            Trabaja con nosotros
          </ContactSwitchTextRight>
        </ContactSwitch>
        <TextContainer>
          <p>
            Correo: <strong>Chillmarin@gmail.com</strong>
          </p>
          <div>
            <img src="" alt="" />
          </div>
        </TextContainer>
      </ContactContainer>
    </>
  );
};
