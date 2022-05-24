import { useState } from 'react';
import {
  ContactContainer,
  ContactSwitch,
  ContactSwitchTextLeft,
  ContactSwitchTextRight,
  TextContainer,
} from './styles';
import { BasicSwitch } from './Switch';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
      {!switchStatus ? (
        <TextContainer>
        <p>
          Correo: <strong>Chillmarin@gmail.com</strong>
        </p>
        <a href="https://api.whatsapp.com/send?phone=584129964043&text=ChillMarin%20-%20Desarrolladores%20web">
          <WhatsAppIcon
            style={{
              fontSize: '2.4rem',
              color: '#29CD9C',
            }}
          />
        </a>
      </TextContainer>
      ): (
        <TextContainer>
          <p>
          Envianos tu CV a <strong>info@chillmarin.com</strong>
          </p>
        </TextContainer>
      )}

        
      </ContactContainer>
    </>
  );
};
