var age = {};
var catogery = {};

function format(obj) {
 var array = [];
 for (agekey in obj)
 {
   array.push(obj[agekey]);
 }
 return array;
 }
 var fileNames= ["India2011.csv","IndiaSC2011.csv","IndiaST2011.csv"];
 fileReader(fileNames);

 function fileReader(fileNames){
   fileNames.map(function(fileName) {

     var fs=require('fs');
     var data=fs.readFileSync(fileName).toString();
     arrayConversion(data);
     //console.log(data);
   });

   age=format(age);

   catogery = format(catogery);

 }
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////the main condition////////////////////////////
function arrayConversion(text)
{
 var header = [];
 text.split('\n').map(function(line , num)
 {
   if(line!=='')
   {
     var line=line.split(',');
     if(num!=0){

       ageKey=line[5];

       //console.log(data);
       if(line[4] == "Total" )
       {
       if (line[5] != "All ages")
       {
         line[12]=parseInt(line[12]);
         if(ageKey in age)
         {
           age[ageKey].TotalLiteratePop +=line[12];
         }
         else {
           {
             age[ageKey] = {};
             age[ageKey].ageGroup = ageKey;
             age[ageKey].TotalLiteratePop = line[12];

           }
         }

     }

             //For Second Education Category wise - all India data combined together
     for(index=15;index<44;index+=3)
     {

       var eduValue = header[index].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

       var totalPopValue = parseInt(line[index]);
             if (eduValue in catogery)
               {
                   catogery[eduValue].totalPop += totalPopValue;
               }
             else
             {
                 catogery[eduValue] = {eduCateg: eduValue, totalPop:totalPopValue };

             }
     }
   }
 }
     else
     {
       header=line;

     }
   }
 }
);
}


 var fs=require('fs');
 fs.writeFile("ageWise.json",JSON.stringify(age),function(err){if(err) throw err; console.log("save age file");})
 fs.writeFile("eduWise.json",JSON.stringify(catogery),function(err){if(err) throw err; console.log("save edu file");})
