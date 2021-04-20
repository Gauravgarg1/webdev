//input lia yha
let input = process.argv.slice(2);
let fs = require("fs");
console.log("input", input);
//array liye option and filepaths k lie
let options = [];
let filepaths = [];
//to extract options and filepaths
for (let i = 0; i < input.length; i++) {
    if (input[i] == "-s" || input[i] == "-b" || input[i] == "-n") {
        options.push(input[i]);

    }
    else {
        filepaths.push(input[i]);

    }
}

// console.log("options", options);
// console.log("filepaths", filepaths);
 
//check that file exist or not
for (let i = 0; i < filepaths.length; i++) {
    let isfilepresent = fs.existsSync(filepaths[i]);
    if (isfilepresent == false) {
        console.log("filepath", filepaths[i], "does not exist");
        return;
    }
}




//to read content from file paths

let totalcontent = "";
for (let i = 0; i < filepaths.length; i++) {
    let content = fs.readFileSync(filepaths[i]);
    //after every files content -> next file content should come
    totalcontent += content+"\r\n";
}
//console.log(totalcontent);

//to implement -s option
let isoption=options.includes("-s");

//now remove empty line breaks
if(isoption)
{
    //split on the basis of lline breaks
    let contentarr=totalcontent.split("\r\n");
    //identify and remove empty line breaks

    let temparr=[];
    for(let i=0;i<contentarr.length;i++)
    {
        if(contentarr[i]!="")
        temparr.push(contentarr[i]);
    }
    totalcontent=temparr.join("\r\n");
}
//implement -n option
let isn=options.includes("-n");
let isb=options.includes("-b");
//now put number on each line


let finaloption;
if(isn==true)
{

    if(isb==true)
    {
        let idxb=options.indexOf("-b");
        let idxn=options.indexOf("-n");
        finaloption=idxb<idxn? "-b" : "-n";

    }
    else
    {
        finaloption="-n";
    }
}
else if(isb==true)
{
    finaloption="-b";
}
if(finaloption=="-n")
{
    let c=1;
    let contentarr=totalcontent.split("\r\n");
    for(let i=0;i<contentarr.length;i++)
    {
        contentarr[i]=c+". "+contentarr[i];
        c++;
    }
    totalcontent=contentarr.join("\n");

}


//now put number on non empty line
if(finaloption=="-b")
{
    let c=1;
    let contentarr=totalcontent.split("\r\n");
    for(let i=0;i<contentarr.length;i++)
    {
        if(contentarr[i]!="")
        {
        contentarr[i]=c+". "+contentarr[i];
        c++;
        }
    }
    totalcontent=contentarr.join("\n");

}
console.log(totalcontent);





