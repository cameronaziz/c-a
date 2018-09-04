export const calculateSize = (size, defaultSize, attr) => {
  if (!size) {
    return defaultSize[attr];
  }
  if (defaultSize.width === defaultSize.height) {
    return size;
  }
  let larger = 'width';
  let smaller = 'height';
  let ratio = defaultSize.height / defaultSize.width;
  if (defaultSize.width < defaultSize.height) {
    larger = 'height';
    smaller = 'width';
    ratio = defaultSize.width / defaultSize.height;
  }
  const calculated = {};
  calculated[larger] = size;
  calculated[smaller] = size * ratio;
  return calculated[attr];
};
