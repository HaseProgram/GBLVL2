// const http = require('http');
// const fs = require('fs');

// const server = http.createServer(function (req, res) {
//   console.log(req.url)

//   let body = null
//   try {
//     // /img/user.svg
//     const ext = req.url.split('.')[1]
//     console.log(ext);
//     const isSvg = ext === 'svg';
//     if (isSvg) {
//       res.setHeader('Content-Type', 'image/svg+xml');
//     }

//     body = fs.readFileSync(`./public${req.url}`)
//   } catch (err) {
//     body = fs.readFileSync(`./public/index.html`)
//   }

//   res.end(body)
// });

// const port = process.env.PORT || 4000;

// server.listen(port);

// console.log(`Server started on port ${port}!`);

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/itemslist/:page', (req, res) => {
  const page = req.params.page;
  fs.readFile(`./public/database/items${page}.json`, 'utf8', (err, data) => {
    res.send(data);
  });
});

app.post('/itemslist', (req, res) => {
  const offset = 6;
  const filePath = './public/database/items3.json';

  fs.readFile(filePath, 'utf8', (err, data) => {
    console.log(req.body);
    const list = JSON.parse(data || {});
    const amountOfData = Object.keys(list).length;
    const newID = offset + amountOfData + 1;
    const newItrem = req.body;
    newItrem.id = newID;
    list[newID] = newItrem;
    fs.writeFile(filePath, JSON.stringify(list), (err) => {
      res.send(list);
    })
  })
});

app.listen(4000, () => {
  console.log('Server started');
});
