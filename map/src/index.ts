import { CustomMap } from './Map';
import { User } from './User';
import { Company } from './Company';

const user = new User('Yo Yo This is a USER BOIZZZZ');
const company = new Company('Comapny is here BOIZZZ');
console.log(Company);
const currentMap = new CustomMap('map');
currentMap.addMarkers(user);
currentMap.addMarkers(company);