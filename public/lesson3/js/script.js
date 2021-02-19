function ex1 () {
  const a = [];

  for (let i = 0; i < 10; i++) {
    a.push(i);
  }

  console.log(a);
}

function ex2 () {
  console.log('Example 2');

  setTimeout(() => {
    console.log('Delayed!');
  }, 1000);
}

function ex3 () {
  setTimeout(() => {
    console.log('Delayed!');
  }, 1000);

  console.log('Example 3');
}

function ex4 () {
  setTimeout(() => {
    console.log('Delayed!');
    console.log('Delayed!');
  }, 0);

  console.log('Example 4');
  console.log('Example 4');
}

function ex5 () {
  let counter = 0;

  const asyncPlus = () => {
    setTimeout(() => {
      counter++;
    }, 500);
  }

  const printCounter = () => {
    console.log(counter);
  }

  const main = () => {
    asyncPlus();
    printCounter();
  }

  main();
}

function ex6 () {
  let counter = 0;

  const asyncPlus = (callback) => {
    setTimeout(() => {
      counter++;
      callback();
    }, 500);
  }

  const printCounter = () => {
    console.log(counter);
  }

  const main = () => {
    asyncPlus(printCounter);
  }

  main();
}


////////////////

// getData(param, (data) => {
//   getAnotherData(data, (data2) => {
//     getMore(data2, () => {

//     })
//   })
// })


// PROMISE

// const P = new Promise();

// 1 - pending
// 2 - fulfilled
// 3 - rejected

function ex7 () {
  let counter = 0;

  const asyncPlus = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        counter++;
        // reject('My new error');
        resolve(counter);
      }, 500);
    });
  }

  const printCounter = data => {
    console.log(data);
  }

  const printError = err => {
    console.warn('Error', err);
  }

  const main = () => {
    asyncPlus()
      .then(printCounter)
      .catch(printError);
  }

  main();
}

ex7();
