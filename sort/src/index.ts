import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollections';
import { CharactersCollection } from './CharactersCollection';

//TODO: Sort numbers
const numberCollection = new NumberCollection([10, -1, -3, -5, 5, 2]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);

//TODO: Sort Strings
const charsCollection = new CharactersCollection('DcBa');
const secSorter = new Sorter(charsCollection);
secSorter.sort();
console.log(charsCollection.data);
