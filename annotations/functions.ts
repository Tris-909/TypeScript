//! Type Annotations for functions
// TypeScript only cares about types, they won't care about logics inside your functions even if it wrong, as long as it return the right type á an output
const add = (a: number, b: number): number => {
    return a + b;   
}

//! Annotations for anonymuos functions
//? Normal Function
function divide(a: number, b: number):number {
    return (a/b)
}

//? Anonymuos Function
const multi = (a: number ,b: number): number => {
    return a*b;
}
const multiply = function(a: number, b: number): number {
    return a*b;
}

//! Void and Never
// If the function does not return anything. Then the result type will be void
const logger = (message: string): void => {
    console.log(message);
}

// Never read the function completely and not returning any values 
const throwError = (message: string): never => {
    throw new Error(message);
}

//! Destructuring with annotations
const forecast = { 
    date: new Date(),
    weather: 'Sunny'
}

const logWeather = ({date, weather}: {
    date: string,
    weather: string
}): void => {
    console.log(`to day is: ${date} and today is ${weather}`);
}
