export const getRandomImage = () => {
  const total = 5; // how many cookie images you have
  const random = Math.floor(Math.random() * total) + 1;
  return `/store/c${random}.png`;
};
