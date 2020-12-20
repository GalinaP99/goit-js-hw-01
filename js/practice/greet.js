const greet = function (name) {
    console.log(`Hello ${name}`);
};
//greet('Mango')

const greetWithName = function (callback) {
    const name = 'Mango'
    console.log(callback);
    callback(name);
}
greetWithName(greet);