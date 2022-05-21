import fase1icon from 'assets/icons/Fase1icon.svg';
import fase2icon from 'assets/icons/Fase2icon.svg';
import fase3icon from 'assets/icons/Fase3icon.svg';
import fase4icon from 'assets/icons/Fase4icon.svg';
import fase5icon from 'assets/icons/Fase5icon.svg';
import fase6icon from 'assets/icons/Fase6icon.svg';

import { Step2 } from './Steps/Step2';
import { Step1 } from './Steps/Step1';

export type EachStep = {
  id: number;
  title: string;
  icon?: any;
  component?: React.FunctionComponent;
};

export const steps = [
  {
    id: 1,
    title: 'Fase 1',
    icon: fase1icon,
    component: Step1,
  },
  {
    id: 2,
    title: 'Fase 2',
    icon: fase2icon,
    component: Step2,
  },
  {
    id: 3,
    title: 'Fase 3',
    icon: fase3icon,
  },
  {
    id: 4,
    title: 'Fase 4',
    icon: fase4icon,
  },
  {
    id: 5,
    title: 'Fase 5',
    icon: fase5icon,
  },
];
