

class OneOfThese {

    private static INSTANCE: OneOfThese;

    private constructor() {

    }

    public static getInstance() {
        // If there is already an instance then just return it
        if (OneOfThese.INSTANCE) {
            return this.INSTANCE;
        }

        // If there is not an instance then create one and return it
        OneOfThese.INSTANCE = new OneOfThese();

        return this.INSTANCE;

    }

    public sayHi() {
        console.log("Hi Singleton");
    }


}


const oneOfThese = OneOfThese.getInstance();

oneOfThese.sayHi();




