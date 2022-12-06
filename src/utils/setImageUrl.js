export const setImageUrl = (path) => {
  const urlImage = `${process.env.REACT_APP_BASE_IMAGE_URL}${path}`;
  return urlImage;
};
