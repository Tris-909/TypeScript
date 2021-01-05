import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollections';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './original';

//TODO: Sort numbers
const numberCollection = new NumberCollection([10, -1, -3, -5, 5, 2]);
numberCollection.sort();
console.log(numberCollection.data);

// //TODO: Sort Strings
// const charsCollection = new CharactersCollection('DcBa');
// const secSorter = new Sorter(charsCollection);
// secSorter.sort();
// console.log(charsCollection.data);

// //TODO: Sort Linked-List
// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);

// const thirdSort = new Sorter(linkedList);
// thirdSort.sort();
// linkedList.print();