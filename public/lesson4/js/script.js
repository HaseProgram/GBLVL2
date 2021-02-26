/* eslint-disable no-console */

console.log('Урок 4');

// example 1

// const example = 'I love JavaScript!';
// const re = /JavaScript/;
// const result = example.match(re);
// console.log(result);

// example 2

// const text = 'I love JavaScript and TypeScript!';
// const re = /[\S]+Script/g;

// const result = text.match(re);
// console.log(result);

// example 3

// const text = '20000 league under the sea!';
// const re = /[\d]+/g;

// const result = text.match(re);
// console.log(result);

// example 4

// const text = '20000 league under the sea!';
// const re = /\d+(.*)under/;

// const result = text.match(re);
// console.log(result);

// example 5

// const text = 'Ссылка: <a href="#mylink">My Link</a> Текст после ссылки';
// const re = /<a href="(.*)">/;
// const result = text.match(re);
// console.log(result);

// example 6
// \N

// const text = `He said: "First quote!", she said: 'Second quote!'`;
// // const re = /['"](.*)['"]/; // "He said'
// const re = /(['"])(.*)\1/g;
// const result = text.match(re);
// console.log(result);

// example 7

// const text = `He said: "First quote!", she said: "Second quote!"`;
// const re = /(['"])(.*?)\1/g; // ? = /z\d*a/ -> za z1a z2a
// const result = text.match(re);
// console.log(result);

// example 7
// let text = 'I love C++!';
// const result = text.replace(/C\+\+/, 'TypeScript');
// console.log(result);

// example 8
// let text = 'I love C++!';
// const result = text.replace(/\s(.*?)\s/, 'matched');

// console.log(result);

// exaple 9
// AAAAABBBBBBBCCCDDDDEEFOOOOOOO => A5B7C3...
// let text = 'AAAAABBBBBBBCCCDDDDEEFOOOOOOO';
// const result = text.replace(/(.)\1+/g, (match, c) => {
//   return c + match.length;
// });
// console.log(result);

