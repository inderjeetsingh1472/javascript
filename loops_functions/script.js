//for loop:-
let inder=[1,2,3,9,5,6,7]
for(let i=0;i<=6;i++){
    let element=inder[i];
    // console.log(element)
}
for (const key in inder) {
    if (Object.hasOwnProperty.call(inder, key)) {
        const element = inder[key];
        // console.log(element)
        
    }
}
for (const iterator of inder) {
    // console.log(iterator)
}
let i=0;
while(i<7){
    console.log(inder[i])
    i++
}
do {
    let i=9
    console.log(inder[i])
    
} while (i<7)

const sum =(a,b)=>{
    return a+b;
}
console.log(sum(5,7))