//this is node global objects used for interacting with the file system
//One need such objects from platforms to work with OS file system

var fs = require('fs'),
    readline = require('readline');


//When reading large files - we cannot use standard methods for file read and write. We read a chunk of data - manipulate and write it back immediately.

var csvFileRead = fs.createReadStream("India2011.csv"),
      lineByline = readline.createInterface({
        input :csvFileRead,
    });


//var regexp =  <SET APPROPRIATE REGULAR EXPRESSION FOR READING AND SPLITTING RECORDS>


var row=[];
var final=[];

//var values={};

lineByline.on('line',function(line){
  row.push(line.split(","));
});


lineByline.on('close',function () {
  var x=[].concat.apply([],row[0]);
  var t=1;
  for(var i=1;i<=3046;i++)
  {
    var y=[].concat.apply([],row[i]);
    var ob={};
    var j=0;
    ob[x[j]]=y[j];
    j++;
    ob[x[j]]=y[j];
    j++;
    ob[x[j]]=y[j];
    j++;
    ob[x[j]]=y[j];
    j++;
    ob[x[j]]=y[j];
    j++;
    ob[x[j]]=y[j];
    final.push(ob);
    t++;
  }
  console.log(final);
});


csvFileRead.on('end', function(){
    fs.writeFile('out.json',JSON.stringify(final));
});
