# TypeScriptSingleton

Basic Typescript Singleton class

Create tsconfig.json with the following command

tsc --init

Changed tsconfig.json target to es6

compile ts file with command in this folder.

tsc

It will generate Singleton.js when completed.

// Create instance of class and only get one instance
const oneOfThese = OneOfThese.getInstance();

// call the one instance.
oneOfThese.sayHi();
