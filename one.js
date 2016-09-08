var fs=require("fs");
var readerStream=fs.createReadStream('India2011.csv');
var readerStream1=fs.createReadStream('IndiaSC2011.csv');
var readerStream2=fs.createReadStream('IndiaST2011.csv');

var writerStream=fs.createWriteStream('json.txt');
readerStream.pipe(writerStream);
readerStream1.pipe(writerStream);
readerStream2.pipe(writerStream);
console.log("program ended");
