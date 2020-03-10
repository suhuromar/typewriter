const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
    if (key === '\u0003') {
        process.stdout.write('Thank you for using me, ciao!');
        process.exit();
    } else if (key === "b"){
        process.stdout.write('\x07');
        process.exit();
    } else if (key >= 0 && key <= 9){
        setTimeout(() => 
        process.stdout.write(`setting timer for ${key} seconds \x07` ), (key*1000));
    }
});

// console.log('after callback');