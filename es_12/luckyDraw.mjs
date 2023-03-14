function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

const getResults = async (player) => {
  try {
    const result = await luckyDraw(player);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

const players = ["Tina", "Jorge", "Julien"];
(async () => {
  for (const player of players) {
    await getResults(player);
  }
})();
