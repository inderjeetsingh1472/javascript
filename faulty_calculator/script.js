let a= prompt("write the value of a")
let b =prompt("enter the value of b")
let d=prompt("enter any operation which you want")
let c=Math.random()
let inder = {
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"*",
    "%":"**",
    "**":"%"
}
if(c<0.1){
    `value of c is ${c}`
console.log(`Ans is {${a}${d}${b}} ` )
alert(
    `"value of c is ${c}"
    "Ans is ${eval(`${a}${d}${b}`)}"`
)
}
else{
    d=inder[d]
    alert(`result is ${eval(`${a}${d}${b}`)}`)
}
