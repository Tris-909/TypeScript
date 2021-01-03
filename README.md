# TypeScript

TypeScript Courses from Stephen Grider Udemy

# Section 1 ( What is TypeScript ? )

1. What is TypeScript ?

   - TypeScript is an extra layer above JavaScript. It is JavaScript with a Type Checking System.
   - It is also a way to write principal code in a work environment where other peoples can read and understand your code.

2. Environment Setup ?

   - npm install -g typescript ts-node (one time install)

3. How to run .ts file ?
   - ts-node (name-file).ts
   - The above line will lead to a new file but it will be javascript file and our browser will use this file to read and render stuffs

# Section 2 ( What is Type System ?)

1. What is type ?

   - Type is a refer to different of properties and functions that related to a value.
   - A value is anything that can assign to a variable

2. Different kind of types :

   # There are 2 kind of types : primitive types and object types

   - Primitive types consist of : number, string, boolean, undefined, null, symbol, void
   - Object Types : functions, arrays, objects, classes

   # Why do we care about types ?

   - Clearly types in TypeScript have engineers to have a better understanding of data flow in the databases. When we're working in an real-life environment where we have to work with a big project that have many developers. TypeScript make it easier for developers to read code and understand the data flow

3. Where do we use types ?
   - Everywhere !

# Section 3 ( Types in Action )

1. Core Types and principals

   - Types of TypeScript run on compilation, typeof JavaScript run on runtime.

   - number (0 , 1, 3, -10, -1.5, 2.5,....)
   - string ('Hi', "Hi", template literal);
   - boolean (true, false)
   - object
   - array (string[], number[], boolean[] or [string, number] or any[])
   - tuples ( array with fixed type and fixed length --> [number, string], push method can't catch error in typescript with tuples: fixed array length)
   - enum ( enum {OLD, NEW} : Automatically enumerated global constant identifiers )
   - any ( "any" types can be literally any types, and remove benefit of TypeScript :) )
   - union ( "union" types is basically "or" in JS --> number | string )

2. Type annotations and Type Inference

   - Type Annotations : Developers tell TypeScript what type we want to assign to a value
   - Type Inference : TypeScript guesses the type of a value

   ### Type Annotations :

   - There are some basics syntaxs for type annotations :

   ```
    // String, Number, Boolean
    const apples: string = 'A String';
    const wrong: boolean = false;
    const aNumber: number = 1;

    // Array
    const numArray: number[] = [1, 2, 3];
    const strArray: string[] = ['1', '2'];
    const booleanArray: boolean[] = [true, false, true];

    // Classes
    class Car {

    }
    let car: Car = new Car();

    // Object Literal
    let test: {
       test1: string;
       test2: boolean
    } = {
       test1: '7/10'.
       test2: false
    }

    // Function
    const logNumber: (i: number) => void = (i) => {
       console.log(i)
    }
   ```

   - Honestly, you can remove all the type annotations above and TypeScript will still understand what each variables type are because we have something called "Type Inference". Basically "Type Inference" is when TypeScript automatically guess type of the value.

   - We only use "Type Annotations" when :

     - Functions that return "any" type. ince there is no way to predict what JSON.parse() will receive. This function will return "any" type

     ```
     const json = {"x": "10", "y": "20"}
     const cordinates: {x: number; y: number} = JSON.parse(json);
     console.log(cordinates); // {x: 10, y: 20}
     ```

     - We declare a variable on one line and initialize it later :

     ```
      let words = ['red', 'blue', 'green'];
      let found: boolean;

      for ( let i = 0; i < words.length; i++) {
          if (words[i] === 'green') {
              found = true;
          }
      }
     ```

     - Variables whose type cannot be inferred correctly

     ```
      let numbers = [-10, -1, -12];
      let numberAboveZero: boolean | number = false;

      for(let i = 0; i < numbers.length; i++) {
         if (numbers[i] > 0) {
            numberAboveZero = numbers[i];
         }
      }
     ```

   ### Annotations with Functions and Objects

   - Type Annotation for normal function :

   ```
   const add = (a: number, b: number): number => {
      return a + b;
   }
   ```

   - Type Annotation for anonymuos function :

   ```
   const add = (a: number, b: number): number => {
      return a + b;
   }
   ```

   - Function return "Void" or "Never" Type :
     - void type is used when the function does not return anything

   ```
   const consoleSmth = (str: string): void => {
      console.log(str)
   }
   ```

   - Never type is used when the function was never finish running and also won't return anything

   ```
   const throwErrorPlease = (message: string): never => {
      throw new Error(message);
   }
   ```

   - Destructuring with annotations :

   ```
   //! Destructuring with annotations
   const forecast = {
       date: new Date(),
       weather: 'Sunny'
   }

   const logWeather = ({date, weather}: {
      date: string,
      weather: string
   }): void => {
      console.log(date);
      console.log(weather);
   }
   ```

   - Destructuring with objects :

   ```
   const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
   }

   const { age }: {age: number} = profile;
   const { coords: { lat, lng}}: {coords: {
      lat: number,
      lng: number
   }} = profile;
   ```

   ### Mastering Typed Arrays

   - There are many types of array in TypeScript : string[], number[], or array inside array string[][] or (number | string)[]

   - Why do we want to use type for arrays ?
     - We have helper functions like pop, map, push only for array.
     - We have an easy time manage value inside the array. So we don't accidentially add or remove a value out of an array
     - We can have type inference when we use destructuring for array

   ### Tuples in TypeScript

   - Tuples (Arraylike but have many different value types inside it with specific order). Let's say you want to describe a human by an array, you will use Tuples and it will look like this :

   ```
   type Human = [string, string, boolean, number];
   const human:Human = ['Tri', 'Vietnamese', true, 21];
   ```

   - Not really been used but good to know !

   ### Interfaces

   - Interfaces is used to describe an object. What property it has, what type of that property is. One small notice about interface is an object can have more props then an interface as long as they have the same props that the interface requires

   ```
   interface CarInterface {
    name: string;
    yearOfCreated: number;
    isSold: boolean
   }

   const Car: CarInterface = {
       name: 'Ford',
       yearOfCreated: 2019,
       isSold: true
   }
   ```

   ### Classes
