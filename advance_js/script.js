async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 5000);
    })
}
(async function main(){
    // let a= await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)
   // let [x,y, ...inder]=[1,3,6,8,2,4,5]
   // console.log(x,y,inder)
   let obj ={
    a:1,
    b:2
   }
   let {a,b}=obj
   console.log(a,b)
})()
// write a await function

