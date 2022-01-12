//const name = 'Max';
//let age = 29;
//let hasHobbies = true;

//name = "Maximillion" 
//will result in an error since the const variable was changed.

//to be clear about intentions in the code, use const for variables
//that the value will never change.
//use const as often as possible to show intention.

//function summarizeUser1(userName, userAge, userHasHobby) {
//    return (
//        'Name is ' +
//        userName +
//        ', age is '+ 
//        userAge + 
//        ' and the user has hobbies: ' +
//        userHasHobby
//    );
//}

//console.log(summarizeUser1(name, age, hasHobbies));

//same function using =>
//const summarizeUser = (userName, userAge, userHasHobby) =>{
//    return (
//        'Name is ' +
//        userName +
//        ', age is '+ 
//        userAge + 
//        ' and the user has hobbies: ' +
//        userHasHobby
//    );
//}
//using more => functions

//for one liners, no need for the return or {}
//const add = (a, b) => a + b;
//console.log(add(1, 2));

//with only one argurement, no need for ()
//const addOne = a => a + 1;
//console.log(addOne(1));

//without any arguements, there must be empty ().
//const addRandom = () => 1 + 2;


/*********************Objects, Properties, & Methods*********************/

//const person = {
//    name: 'Max',
//    age: 29,
//    greet() {
        //the 'this' keyword identifies the object it's in, in this case, person.
        //it would also work as person.name
//        console.log('Hi, I am ' + this.name);
        //the => doesn't work when using 'this' originally the syntax looked like this:
        //greet: () => {
        //it can either look like this,
        //greet: function() {
        // or what it is now.
//    }
//};

//person.greet();

//console.log(person);


/****************Arrays & Array Methods******************/

//const hobbies = ['Sports', 'Cooking'];
//for (let hobby of hobbies) {
//    console.log(hobby);
//}

//map will transform values of array and provides new array;
//adds 'Hobby:' to the front of all values.
//console.log(hobbies.map(hobby => {
//    return 'Hobby: ' +hobby
//}));

//push adds a value to the existing array. Const is still okay to use.
//hobbies.push('Programming');
//console.log(hobbies);


/*******************Spread & Rest Operators******************/

//The ... is the 'spread' operator. It clears all elements and properties of the old array. It's used to copy existing arrays.
//const copiedArray = [...hobbies];
//console.log(copiedArray);

//const copiedPerson = {...person}; //note the curly braces due to the objects involved.
//this will remove all the extras and show just the bare array.
//console.log(copiedPerson);

//use ... to make copies of arrays so you don't alter the original.

//The ... is also the 'rest' operator. Just depends on how you use it.
//const toArray1 = (arg1, arg2, arg3) => {
//    return [arg1, arg2, arg3];
//};
//console.log(toArray1(1, 2, 3, 4));
//this array is very inflexible. It won't show the 4. To make it more dynamic, add ...
//do this instead
//const toArray = (...args) => {
//    return args;
//};
//console.log(toArray(1, 2, 3, 4));
//the ... will create arguements necessary in the array to show what is being passed to it.

/***************Destructuring*****************/

//const printName = (personData) => {
//    console.log(personData.name);
//}

//printName(person);

//same function as above, but this is how destructuring works. It pulls out the value and sets it equal to a variable.
//const printName = ({ name }) => {
//    console.log(name);
//}
//printName(person);
//how to destructure an object
//const { name, age } = person;
//console.log(name, age);
//how to destructure an array
//const [hobby1, hobby2] = hobbies;
//console.log(hobby1, hobby2);

/******************Async Code & Promises****************/

//This is asynchronous code since it doesn't happen immediately
/*setTimeout(() => {
    console.log('Timer is done!');
}, 2000);*/

//even though this is written after the timeout function, it still shows first. It is sychronous code and will always be excuted befor async code.
console.log("hello");

//to deal with this, you can use a callback function.

const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
    });
}, 2000);