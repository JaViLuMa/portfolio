import { useState, useMemo, type FC } from 'react';

import IconMail from 'icons/IconMail';
import useWindowSize from 'hooks/useWindowSize';

import Contacts from './components/Contacts';
import type { ContactMeProps } from './ContactMe.types';
import applyHeaderContactsClassName from './ContactMe.utils';

import Header from '../Header';
import Typography from '../Typography';

const ContactMe: FC<ContactMeProps> = ({ data: contacts, error }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { width } = useWindowSize();

  const widthLessThan1280 = useMemo(() => width < 1280, [width]);

  return (
    <>
      <Header
        className={applyHeaderContactsClassName(widthLessThan1280, isHovered)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && !widthLessThan1280 ? (
          <Contacts contacts={contacts} error={error} />
        ) : (
          <>
            <div>
              <IconMail className="hidden xl:block" color="#ffC900ed" />
            </div>
            <Typography
              Tag="h3"
              label="Contact me"
              className="text-[40px] font-bold leading-8 xl:border-r-[10px] xl:border-solid xl:border-black xl:pr-[10px] xl:text-[50px] xl:leading-none"
            />
          </>
        )}
      </Header>
      {widthLessThan1280 ? (
        <div className="grid grid-flow-dense grid-cols-2 border border-black bg-philippine-yellow grid-in-contacts dark:border-white dark:bg-lemon-glacier">
          <Contacts contacts={contacts} error={error} />
        </div>
      ) : null}
    </>
  );
};

export default ContactMe;
