console.log("inder is hacker")
setTimeout(() => {
    console.log("jassi is hacker")
}, 2000);
console.log("yoyal is hecker")


// let fn =(arg)=>{
//     console.log(arg)
// }

// const callback = (arg,fn) => {
//     console.log(arg)
//     fn("singh")
// }

const loadScript = (src, callback) => {
    let inder = document.createElement("inder")
    inder.src = src
    inder.onload = () => callback(inder,fn)
    document.head.append(inder)
    // console.log(src)
}
loadScript("https://prismjs.com/",(arg,fn)=>{
    console.log(arg)
    fn("firstargument",()=>{
        jassi("jasmeet singh",()=>{

        })
    })
})