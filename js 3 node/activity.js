let fs=require('fs');
//path yeh module ..jo humme extension ka function provide krta h
let path=require('path');
let extensions={
    "Images":['.png','.jpg','.jpeg','.gif'],
    'Audio':['.mp3'],
    'Documents':['.pdf','.txt','.doc'],
    'Compressed':['.zip','.rar'],
    'Videos':['.mkv','.mp4']
}

let input=process.argv.slice(2);
let folderPath = input[0];
//console.log(folderPath);
//ab actual kaam shuru hoga
let extFolderPath = folderPath;
function checkFolder(extension,folderPath)
{
    for(let key in extensions)
    {
        let arr = extensions[key];
        //array.includes values array exist or not
        let eon = arr.includes(extension);
        if(eon==true)
        {
            // console.log(true);
            console.log(key);
            extFolderPath = path.join(folderPath,key);
            console.log(extFolderPath);
            break;    
        }
        
    }
    return fs.existsSync(extFolderPath);
    
}

let content=fs.readdirSync(input[0]);

for(let i=0;i<content.length;i++)
{
    // console.log(content[i]);
    //extensions
    
    //console.log(path.extname(content[i]));
    let extensionname=path.extname(content[i]);
    let extensionfolderexist=checkFolder(extensionname,folderPath);
    console.log(extensionfolderexist);


}






