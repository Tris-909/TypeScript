"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumberCollections_1 = require("./NumberCollections");
var numberCollection = new NumberCollections_1.NumberCollection([10, -1, -3, -5, 5, 2]);
var sorter = new Sorter_1.Sorter(numberCollection);
sorter.sort();
console.log(sorter.collection.data);
