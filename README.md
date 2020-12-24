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
