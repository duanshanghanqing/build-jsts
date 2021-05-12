import { len } from './const';

const test = (num: number): any => {
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
    const num = await test(len);
    console.log('num', num);
})();
