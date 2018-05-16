function countWithArray(array) {
    let numbers = [
        '2 1 5 6 7 4 9 8 5 7 4 8 5 9 0 6 8 5 7 2 0 5 2 1 9 8 8 6 4 7'
    ];
    let i, j, counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (i = 0; i < numbers.length; i++) {
        for (j = 0; j < numbers[i].length; j++) {
            if (numbers[i][j] !== ' ') {
                counter[numbers[i][j]]++;
            }
        }
    }
    for (i = 0; i < 10; i++) {
        console.log(i, counter[i]);
    }
}
countWithArray();