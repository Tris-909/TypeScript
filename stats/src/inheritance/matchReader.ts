import { CsvFileReader } from './CSvFileReader';  
import { parseDate } from './utils';
import { matchResult } from './matchResult';

type Result = [Date, string, string, number, number, matchResult, string];

export class MatchReader extends CsvFileReader<Result> {
    mapRow(row: string[]): Result {
        return [
            parseDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as matchResult,
            row[6]
        ]
    }
}