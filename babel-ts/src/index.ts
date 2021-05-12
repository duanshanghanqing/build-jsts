const test = (num: number) => {
    console.log('test');
    return new Promise((resolve, reject) => {
        if (num > 5) {
            resolve(true);
        } else {
            reject(false);
        }
    });
};

export default test;

(async () => {
    const num = await test(10);
    console.log('num', num);
})();