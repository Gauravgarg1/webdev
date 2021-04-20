let fs=require('fs');
//read krna file ko
let data=fs.readFileSync('abc.txt');
console.log(data.toString());

//write krna file ko  //ye overite krdega

let wdata=fs.writeFileSync('write.txt','hello bhai');

//append usme add krega

fs.appendFileSync('write.txt','mera naam');

//delet krna file ko
//fs.unlinkSync('abc.txt');

//directory banana
fs.mkdirSync('D:/other');

console.log(fs.existsSync('write.txt'));