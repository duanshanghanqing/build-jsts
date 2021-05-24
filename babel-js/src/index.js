
const test = () => {
    console.log('test');
    console.log([1,2,3].includes(1));
    return Promise.reject(1);
}
test()