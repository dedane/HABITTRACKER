import * as React from 'react';
import { enGB, enUS,  } from 'date-fns/locale';


import { ReactComponent as UnitedKingdomFlagSvg } from 'icons/united-kingdom.svg';
import { ReactComponent as UnitedStatesFlagSvg } from 'icons/united-states.svg';

// Defaukt locale
const defaultLocale = enUS;

// Available locales
const locales = [
  {
    code: 'en-US',
    label: 'English US',
    icon: <UnitedStatesFlagSvg />,
    import: enUS,
  },
  {
    code: 'en-GB',
    label: 'English GB',
    icon: <UnitedKingdomFlagSvg />,
    import: enGB,
  },
  
];

export { defaultLocale, locales };
