
class A {}

const test = () => {
    const a = new A();
    console.log(a);
    console.log([1,2,3].includes(1));
    console.log(new Map());
    console.log(new Set());
    return Promise.resolve(1);
}
test().then((res) => {
    console.log(res)
});

;(async function() {
    const res = await test();
    console.log(res);
})();