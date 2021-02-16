const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  let body = null

  try {
    const isSvg = req.url.split('.')[1] === 'svg'
    if (isSvg) {
      res.writeHead(200, {'content-type': 'image/svg+xml'})
    }

    body = fs.readFileSync(`./public${req.url}`)
  } catch {
    body = fs.readFileSync('./public/index.html', 'utf8')
  }

  res.end(body)
});

const port = process.env.PORT || 3000;

server.listen(port);

console.log(`Server started on port ${port}!`);
