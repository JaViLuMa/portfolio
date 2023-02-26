export default (widthLessThan1280: boolean, isHovered: boolean) => {
  const standard =
    'relative gap-10 bg-pale-magenta py-[26px] grid-in-contact-me dark:bg-electric-pink xl:px-20 xl:after:absolute xl:after:right-[2px] xl:after:bottom-[2px] xl:after:h-6 xl:after:w-6 xl:after:content-[url(/icons/icon-hover-light.svg)] xl:after:dark:content-[url(/icons/icon-hover-dark.svg)]';

  if (widthLessThan1280) {
    return standard;
  }

  if (!widthLessThan1280 && isHovered) {
    return 'bg-philippine-yellow scrollbar dark:bg-lemon-glacier xl:justify-start xl:overflow-x-auto xl:scrollbar-thumb-black xl:dark:scrollbar-thumb-white';
  }

  return standard;
};
