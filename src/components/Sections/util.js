export const duration = 300;

export const defaultRotate = {
  position: 'absolute',
  left: '95%',
  top: '-25%',
  transition: `transform ${duration * 4}ms ease-in-out 300ms, left ${duration * 3}ms ease-in-out, top ${duration * 5}ms ease-in-out`,
  transform: 'rotate(80deg)',
};

export const rotateStyles = {
  entering: { transform: 'rotate(-5deg)', left: '85%', top: '35%' },
  entered: { transform: 'rotate(-5deg)', left: '65%', top: '35%' },
  exiting: { left: '65%' },
  exited: { left: '65%' },
};

export const defaultStyle = (isEven, remainingPercent) => ({
  transform: `translateX(${isEven ? '-' : ''}${remainingPercent * 300}px) \
    rotate(${isEven ? '-' : ''}${remainingPercent * 4}deg) \
    scale(${(remainingPercent / 4) + 1}) \
    skewX(${isEven ? '-' : ''}${remainingPercent * 4}deg)`,
});

export const calculatePercent = (projectsScroll, projectsPast) => {
  let translateX = projectsScroll - 260;
  if (translateX < 0) {
    translateX = 0;
  }
  let remainingPercent = (translateX - 100) / 636;
  if (remainingPercent < 0) {
    remainingPercent = 0;
  }
  if (projectsPast) {
    remainingPercent = 0;
  }
  return remainingPercent;
};
