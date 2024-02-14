const getRandomInt = () => {
  return new Promise((res) => {
    const rndInt = Math.floor(Math.random() * 20 + 1);
    setTimeout(() => {
      res(rndInt);
    }, 1000);
  });
};

export default getRandomInt;
