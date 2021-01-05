import {CsvFileReader} from './CSvFileReader';
import {MatchReader} from './MatchReader';
import {matchResult} from './matchResult';

const dataReader = new CsvFileReader('football.csv');
const reader = new MatchReader(dataReader);
reader.load();

let matches = reader.matches;
let manUnitedWins = 0;
for (let i = 0; i < matches.length; i++) {
    if (matches[i][1] === 'Man United' && matches[i][5] === matchResult.HomeWin) {
        manUnitedWins++;
    } else if (matches[i][2] === 'Man United' && matches[i][5] === matchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} times`);