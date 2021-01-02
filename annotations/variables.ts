// type annotations
const apples = 5;
let speed: string = '30 km/h';
let arr = ['1','2'];
// Type Annotations throw errors if we re-assign different type into "speed" variable
// speed = 30;

// Type Annotations will throw errors for the same below
// const testArray: string[] = ['a', 'b'];
// testArray.push(2)

const json = '{"x": "10", "y": "20"}'
const cordinates: {x: number, y: number} = JSON.parse(json);
console.log(cordinates); // {x: 10, y: 20}

let words = ['red', 'blue', 'green'];
let found: boolean;

for ( let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        found = true;
    }
}