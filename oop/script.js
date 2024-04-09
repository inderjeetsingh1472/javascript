// let obj ={
//     a:1,
//     b:"inder"
// }
// console.log(obj)
// let animal ={
//     eats:"true"
// };
// let rabbit={
//     runs:true
// };
// rabbit.__proto__=animal
class animal{
    constructor(name){
        this.name=name;
        console.log("object is created")
    }
    eats(){
        console.log("kha rehan")

    }
    jumps(){
        console.log("khood raha hoon")
    }


}
class lion extends animal{
constructor(name){
    super(name)
    console.log("this is new obj called lion")
}
eats(){
    super.eats()
    console.log("kha rehan hune")

}

}




let a=new animal("inder");
console.log(a)
let l=new lion("shera")
console.log(l)