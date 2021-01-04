"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumberCollections_1 = require("./NumberCollections");
var CharactersCollection_1 = require("./CharactersCollection");
//TODO: Sort numbers
var numberCollection = new NumberCollections_1.NumberCollection([10, -1, -3, -5, 5, 2]);
var sorter = new Sorter_1.Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
//TODO: Sort Strings
var charsCollection = new CharactersCollection_1.CharactersCollection('DcBa');
var secSorter = new Sorter_1.Sorter(charsCollection);
secSorter.sort();
console.log(charsCollection.data);
