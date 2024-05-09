let arr=[43,45,45662,21,1,253,451]

for(let i=0;i<arr.length;i++){

    let swap=false

    for(let j=0;j<arr.length;j++)
        {
        if(arr[j]>arr[j+1])
            {
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
            swap=true
        }
    }
    if(!swap){
        break
    }
}
console.log(arr);