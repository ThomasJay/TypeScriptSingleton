"use strict";
class OneOfThese {
    constructor() {
    }
    static getInstance() {
        // If there is already an instance then just return it
        if (OneOfThese.INSTANCE) {
            return this.INSTANCE;
        }
        // If there is not an instance then create one and return it
        OneOfThese.INSTANCE = new OneOfThese();
        return this.INSTANCE;
    }
    sayHi() {
        console.log("Hi There");
    }
}
const oneOfThese = OneOfThese.getInstance();
oneOfThese.sayHi();
