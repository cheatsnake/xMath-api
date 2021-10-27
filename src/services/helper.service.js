export function randomNumber(max, min) {
    return Math.round(Math.random() * (max - min)) + min;
}

export function findingDivisor(number) {
    const arr = [];

    if (number < 0) {
        for (let i = number; i <= 0; i++) {
            if (number % i === 0) {
                arr.push(i);
                arr.push(-i);
            }
        }
    } else {
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) arr.push(i);
        }
    }

    return arr[randomNumber(arr.length - 2, 1)];
}