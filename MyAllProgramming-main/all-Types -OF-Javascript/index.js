


// console.log("let start linear search")
// console.log("bineary search iteartive")



// const myName=document.getElementById("my-name")

// const btn=document.getElementById("mt-btn")



// function maketext(size){

//     function changeSize(){

//         myName.style.fontSize=`${size}px`
//     }

//     return changeSize
// }

// const sizes70=maketext(70)

// btn.addEventListener("click" , sizes70)


//   console.log(addto)





// let data=[10 , 20 , 30 , 40] // bineary use a first sort bineary use in a sort array

// let find=20
// let  start=0;
// let end=data.length-1;
// let posit=undefined;


// while(start <= end){ // start queal to end  and  start point small to end
//     // let minds=Math.floor(data.length/2) data.length  4
// let mid=Math.floor((start+end) / 2) // start + end is 3

//  // console.log(mid) //divide number
//  //console.log(data[mid]) middle point
// // console.log(data[mid])
//  if(data[mid] === find){
//     posit=mid
//     break;
//  }else if(data[mid] < find){
//     start =mid+1
//  }else{
// end=mid-1
//  }
// }

// console.log(posit)


// let data=[10 , 20 , 30 , 40 , 50]

// data.splice(1 , 01, "jugal")

// console.log(data)

// for(let i=0; i<10; i++){ // odd number

 
//     if(i%2 !=0){

//         console.log(i)
//     }

// }






// function one(){

//     setTimeout(()=>{

//     console.log("jugal")

//     setTimeout(()=>{

//         console.log("two")

//         setTimeout(()=>{

//             console.log("three")

//             setTimeout(()=>{

//                 console.log("four")
//             },1000)
//         },2000)
//     },3000)
//     },4000)
// }


// one()


///Debouncing  in javascript/////////////!SECTION


//search bar////////////////!SECTION 

//scroll bar/////////////////FIXME - 





// let data=[9 , 8 , 7 , 6 , 5 , 4]  // line 1 inputs
// for(let i=1; i<data.length; i++){  // line 8
//   let   current=data[i] // line // 1
//    let  j=i-1 // line 1
//     while(j>=0 && data[j] > current){ // line 8
//         data[j+1]=data[j] // line 1
//         j--  // line 1
//     }
//     data[j+1]=current //line 1
// }
// console.log(data) // line 1


//Time complexity 

//space complexity



///Linear search

// Date =[] ::data

//elemnet=80 \\ delemnet
// define a lopp
//mach  element 
// if else =mach
//if not match 
//not resdult found




// function maxSubArray(nums) {
//     let sum = 0;
//     let max = nums[0];
  
//     for (let i = 0; i < nums.length; i++) {
//       sum += nums[i];
//       if (sum > max) {
//         max = sum;
//       }
//       if (sum < 0) {
//         sum = 0;
//       }
//     }
  
//     return max;
//   }
  
//   // Time Complexity - O(n)
//   // Space Complexity - O(1)
  
//   console.log(maxSubArray([5, 4, -1, 7, 8]));





// function factorial(item){
// // console.log(item)

// // return item * item

// if(item ==0){
//     return 1
// }

// return item * factorial(item-1)

// // return 5 * factorial (5 -1) * factorial(4-1)* factorial(3-1) * factorial(2-1)* fcator(1-1)
// }

// let data=5

// console.log(factorial(data ))
// // 5*4*3*2*1 --5
// //4*3*2*1 -- 4
// const timestamp = 1687251136000;
// const date = new Date(timestamp);

// console.log(date.getMonth());
// console.log(date.getTime())



//lexical scop /////////////


// function one(){

//     let a=100

//     console.log(data)
// }

// console.log(a)

// console.log(one())


///colurse //////////////////

// function inner(){
//     let a=10

//     function outer(){

//         let b=20

//         console.log(a , b)
//     }

//     outer()
// }

// inner()





// function calculateSum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//     return sum;
//   }
  
//   const numbers = [1, 2, 3, 4, 5  ];
//   const result = calculateSum(numbers);
//   console.log(result); // Output: 15





///////////////////


// function generateRandomString(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       result += characters.charAt(randomIndex);
//     }
//     return result;
//   }
  
//   // Generate a random string of length 10
//   const randomString = generateRandomString(10);
//   console.log(randomString);

// function fuffer(array) {
//     for (let i = array.length-1; i >= 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }
  
//   let fufferss = [5, 7, 9, 3];
//   let check = fuffer(fufferss);
//   console.log(check);




// function climbingStaircase(n) {
//     const noOfWays = [1, 2]
//     for (let i = 2; i <= n; i++) {
//       noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
//     }
//     return noOfWays[n - 1]
//   }
  
//   console.log(climbingStaircase(1))
//   console.log(climbingStaircase(2))
//   console.log(climbingStaircase(3))
//   console.log(climbingStaircase(4))
//   console.log(climbingStaircase(5))
  

// let hexcolor=`#${Math.random().toString(16).slice(2,8).toUpperCase().padEnd(6 , 0)}`

// console.log(hexcolor)

// // padEnd // example minum 8 length of letterr

// let name="jugal"

// console.log(name.padEnd(8 , 0))


//////////////////////

