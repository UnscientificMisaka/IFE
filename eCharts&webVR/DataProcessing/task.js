var fs = require("fs");
var result = []; 


fs.readFile("sp500hst.txt",function(err,data){
        if(err){
            return console.error(err);
        }
        result = data.toString().split("\n");
        
        for(var i = 0;i<result.length;i++){
            result[i] = result[i].split(",");
        }
        // console.log(arr);
        return result;
    })

// var result = handle();
// console.log(handle());

console.log(result)