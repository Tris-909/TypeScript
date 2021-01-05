"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSvFileReader_1 = require("./CSvFileReader");
var MatchReader_1 = require("./MatchReader");
var matchResult_1 = require("./matchResult");
var dataReader = new CSvFileReader_1.CsvFileReader('football.csv');
var reader = new MatchReader_1.MatchReader(dataReader);
reader.load();
var matches = reader.matches;
var manUnitedWins = 0;
for (var i = 0; i < matches.length; i++) {
    if (matches[i][1] === 'Man United' && matches[i][5] === matchResult_1.matchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (matches[i][2] === 'Man United' && matches[i][5] === matchResult_1.matchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " times");
