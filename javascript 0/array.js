let a=[1,2,3,4,5];

function fun(a)
{
    let mini=6;
    let maxo=0;

    for(let i=0;i<a.length;i++)
    {
        if(a[i]<mini)
        mini=a[i];

        if(a[i]>maxo)
        maxo=a[i];
    }
console.log("min is=",mini);
console.log("max is=",maxo);


}
fun(a);