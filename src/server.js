const MAX_IMAGES = 50;
let imageNumber = 0;

let lastUpdate = 0;

function serveImage(res, timeout) {
  const now = Date.now();
  if (now - lastUpdate > timeout) {
    imageNumber = (imageNumber + 1) % MAX_IMAGES;
    lastUpdate = Date.now();
  }
  const imageName = `picture-${imageNumber + 1}.png`;
  res.sendFile(imageName, { root: './imgs/random/' });
}
module.exports = function (app, route) {
  app.get(`${route}asset`, (req, res) => {
    serveImage(res, 10000);
  });
};
