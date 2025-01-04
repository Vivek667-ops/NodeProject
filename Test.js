function sum(...args) {
    let sumE = 0;
    let sumO = 0
    console.log("first",args)
    for (let arg of args){
        if (arg%2==0){
            sumE += arg;

        }else if(arg%2!=0){
            sumO += arg;

        }
        
    }
    return {"sum of Even ": sumE, "sum of Odd ":sumO};
  }
  
console.log("first",sum(4, 9, 16, 25, 29, 100, 66, 77))
