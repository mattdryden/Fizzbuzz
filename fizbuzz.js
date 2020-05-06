for(var i = 1; i <= 100; i++) {
    console.log(i, (i % 3 === 0 && i % 5 === 0) ? 'fizbuzz' : i % 3 === 0 ? 'fizz' : i % 5 === 0 ? 'buzz' : '');
}