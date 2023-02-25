import type { Contact } from 'components/ContactMe/ContactMe.types';

const bottomBorderLogic = (contacts: Contact[], index: number) => {
  if (contacts.length % 2 === 0) {
    return index < contacts.length - 2 ? 'border-b' : '';
  } else {
    return index < contacts.length - 1 ? 'border-b' : '';
  }
};

export default (contacts: Contact[], index: number) => {
  const classes: string[] = [];

  if (index % 2 === 0) {
    classes.push('border-r');
  } else {
    classes.push('border-l');
  }

  if (contacts.length % 2 !== 0 && index === contacts.length - 1) {
    classes.push('border-0');
  }

  if (index === contacts.length - 1 && contacts.length % 2 !== 0) {
    classes.push('col-span-full');
  }

  if (index > 1) {
    classes.push('border-t');
  }

  return [
    ...classes,
    'border-black dark:border-white',
    bottomBorderLogic(contacts, index),
  ];
};
