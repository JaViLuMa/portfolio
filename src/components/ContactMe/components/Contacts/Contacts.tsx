import type { FC } from 'react';

import cn from 'utils/cn';

import iconsMap from './Contacts.constants';
import type { ContactsProps } from './Contacts.types';
import applyContactsBorderClassName from './Contacts.utils';

import Typography from '../../../Typography';

const Contacts: FC<ContactsProps> = ({ contacts, error }) =>
  !error && contacts.length ? (
    <>
      {contacts.map((contact, index) => (
        <a
          key={contact.id}
          href={contact.href}
          target={contact.external ? '_blank' : '_self'}
          rel="noopener noreferrer"
          className={cn(
            applyContactsBorderClassName(contacts, index),
            'flex w-full flex-col items-center justify-center gap-[14px] py-2 px-1 xl:h-full xl:min-w-[180px] xl:cursor-contact xl:border-y-0 xl:border-x xl:first:border-l-0 xl:last:border-r-0'
          )}
        >
          {iconsMap.get(contact.value) || iconsMap.get('email')}
          <Typography Tag="span" label={contact.label} className="font-roboto text-base italic" />
        </a>
      ))}
    </>
  ) : (
    <a
      href="'mailto:matej.ruzic011@gmail.com'"
      className="col-span-full flex w-full flex-col items-center justify-center gap-[14px] py-2 px-1 xl:h-full xl:cursor-contact xl:border-y-0 xl:border-x xl:first:border-l-0 xl:last:border-r-0"
    >
      {iconsMap.get('email')}
      <Typography Tag="span" label="matej.ruzic011" className="font-roboto text-base italic" />
    </a>
  );

export default Contacts;
