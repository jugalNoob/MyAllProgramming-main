function getRandomValue(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function doSomeHeavyTask() {
    const ms = getRandomValue([100, 150, 600, 1000, 800, 6000]);
    const shouldThrowError = getRandomValue([1, 2, 3, 4, 5, 6, 7]) === 6;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldThrowError) {
                const randomError = getRandomValue([
                    "DB Payment failure",
                    "DB Server is Down",
                    "Access Denied",
                    "Not Found Error"
                ]);
                reject(new Error(randomError));
            } else {
                resolve(ms);
            }
        }, ms);
    });
}

module.exports = { doSomeHeavyTask };
