// stack opration //

// class stack {

//     constructor() {
//         this.array = []
//         this.revArray = []
  
//     }
  
//     IsUnderflow() {
//         if (this.array.length == 0) {
//             console.log("stack is underflow");
//         }
//     }
  
//     IsOverFlow() {
//         if (this.array.length > 5) {
//             console.log("stack is overflow");
//         }
//     }
  
//     addElement(element) {
//         this.array.push(element)
//     }
  
//     secondArray(element) {
//         this.second_Array.push(element)
//     }
  
//     print() {
//         this.array.map((val, ind) => {
//             console.log(val);
//         })
//     }
  
//     reverse() {
//         console.log("Now Reverse Array");
  
//         for (let i = 0; i < this.array.length; i++) {
//             this.revArray[i] = this.array[this.array.length - 1 - i]
//         }
  
//         console.log(this.reverseArray);
//     }
  
//     lastElement() {
//         console.log("This is Last Element");
//         console.log(this.array[0]);
//     }
  
//     firstElement() {
//         console.log("This is First Element");
//         console.log(this.array[this.array.length - 1]);
//     }
  
//     lastSecond() {
//         console.log("This is lastSecond Element");
//         console.log(this.array[1]);
//     }
  
//   }
  
//   let s1 = new stack();
//   s1.IsUnderflow();
  
//   s1.addElement(49);
//   s1.addElement(17);

  
//   s1.IsOverFlow();
//   s1.print();
//   s1.lastElement()
//   s1.firstElement()
//   s1.lastSecond()
  
//   s1.reverse()



// queue opration //

class queue {
    constructor() {
        this.array = []
        this.size = 5
    }

    insertElement(element) {
        if (this.array.length < this.size){
            this.array.push(element)
        }
        else{
            console.log("This Is overFlow");
        }
    }

    removeIndex(index){
        for (let i = index; i < this.array.length; i++) {            
            this.array[i]  = this.array[i+1]
        }
        this.array.length = this.array.length-1
    }

    addElement(value,index){
        for (let i = (this.array.length -1); i >=index; i--) {
            
            this.array[i+1] = this.array[i]
        }
        this.array[index] = value

        console.log(this.array);
    }

    print(){
        if (this.array.length!==0) {
            this.array.map((val,index)=>{
                console.log(val);
            })
        }
        else{
            console.log("underflow");
        }
    }
}


let s1 = new queue()
s1.insertElement(49)
s1.insertElement(17)
s1.insertElement(21)
s1.insertElement(66)
s1.insertElement(32)

s1.removeIndex(2)
s1.addElement(1028,1)

s1.print()