
console.log("Hello from Webpack!");

class Foo {
    constructor() {
        this.bar = "bar";
    }

    getBar() {
        return this.bar;
    }
}

const foo = new Foo();
console.log(foo.getBar());