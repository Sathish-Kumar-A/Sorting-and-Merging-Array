

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput=[];

inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close",()=>{
    data1=userInput[1].split(" ");
    data2=userInput[2].split(" ");
    for(var i=0;i<data1.length;i++){
        for (var j=0;j<(data1.length-i-1);j++){
            if(data1[j]>data1[j+1]){
                var max=data1[j];
                data1[j]=data1[j+1];
                data1[j+1]=max;
            }
        }
    }
    for(var k=0;k<data2.length;k++){
        for(var g=0;g<(data2.length-k-1);g++){
            if(parseInt(data2[g])<parseInt(data2[g+1])){
                var max1=data2[g+1];
                data2[g+1]=data2[g];
                data2[g]=max1;
            }
        }
        
    }
    var join=data1.concat(data2)
    console.log(...join);
})