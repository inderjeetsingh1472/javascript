let rand= Math.random()
let adjectives,shopname,anotherword
if(rand<0.33){
     adjectives="crazy"
}
else if(rand<0.666){
adjectives='amazing';
}
else{
    adjectives='fire';
}
let random=Math.random()
if(rand<0.33){
shopname='engine'
}
else if(rand<0.666){
shopname='food'
}
else{
shopname='garments'
}
let random1=Math.random()
if(rand<0.33){
anotherword='bros'
}
    else if(rand<0.666){
anotherword='limited'
    }
    else{
anotherword='hub'
    }
    console.log(`your shop name is ${adjectives}${shopname}${anotherword}`)
    alert(`your shop name is ${adjectives}${shopname}${anotherword}`)
    confirm(`your shop name is ${adjectives}${shopname}${anotherword}`)
