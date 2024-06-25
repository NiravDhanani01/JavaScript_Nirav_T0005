// multiple of 3 na d 5

for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} Both`);
    } else if (i % 5 == 0) {
        console.log(`${i} only 5`)
    } else if (i % 3 == 0) {
        console.log(`${i} only 3`);
    }
    else {
        console.log(`${i}`);
    }
}
