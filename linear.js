let array = [1,4,7,90,34,23,89]

let element = 10;
let flag = false

for(let i = 0 ; i <array.length;i++){
    if(array[i]===element){
        console.log("true");
        flag = true
        break
    }
}

if(!flag){
    console.log("false");
}