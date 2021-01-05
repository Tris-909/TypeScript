import {parseDate} from './utils';
import {matchResult} from './matchResult';

interface DataReader {
    read(): void;
    data: string[][];
}
type Result = [Date, string, string, number, number, matchResult, string];

export class MatchReader {
    matches: Result[] = [];
    
    constructor(public reader: DataReader){}

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((row: string[]): Result => {
            return [
                parseDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as matchResult,
                row[6]
            ]
        })
    }
}