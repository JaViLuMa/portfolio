import type { ReactElement } from 'react';

import IconGithub from 'icons/IconGithub';
import IconLinkedIn from 'icons/IconLinkedIn';
import IconMail from 'icons/IconMail';

export default new Map<string, ReactElement>([
  ['email', <IconMail color="#ffffff" />],
  ['linkedin', <IconLinkedIn />],
  ['github', <IconGithub />],
]);
