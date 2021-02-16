const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  let body = null

  const extToMimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    png: 'image/png',
    svg: 'image/svg+xml',
    jpg: 'image/jpeg',
  }

  try {
    const extension = req.url.split('.')[1]
    const mime = extToMimes[extension]

    if (mime) {
      res.setHeader('Content-Type', mime)
    }

    body = fs.readFileSync(`./public${req.url}`)
  } catch {
    res.setHeader('Content-Type', extToMimes['html'])
    body = fs.readFileSync('./public/index.html', 'utf8')
  }

  res.end(body)
});

const port = process.env.PORT || 3000;

server.listen(port);

console.log(`Server started on port ${port}!`);
