let a=1;
let b=3
console.log(a+b)
let friend = {
name:"jassi",
name2:"harjot"
}
console.log(friend) 
for (  key in friend)  {
{         element = friend[key];
        console.log(key,element)
    }
    for (const  char of "inder") {
        console.log(char)
    }
}
function names(name){
    console.log("hey my name is"+name)
}
let c="inder"
console.log(names(c))
names("inderjeet")
for (const key in friend) {
    if (friend.hasOwnProperty.call(friend, key)) {
        const element = friend[key];
        console.log(element ,  key)
    }
}
for (const i of "jasmeet singh") {
    console.log(i)
}