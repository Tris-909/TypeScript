import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollections';

const numberCollection = new NumberCollection([10, -1, -3, -5, 5, 2]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(sorter.collection.data);