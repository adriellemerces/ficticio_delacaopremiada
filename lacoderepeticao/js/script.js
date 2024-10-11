const person = {fname:"Adrielle", lname:"Merces" , age:"22"};

let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}
console.log(txt)  
