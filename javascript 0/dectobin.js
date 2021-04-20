function fun(a){
let no=0;
let help=1;
while(a!=0)
{
    let i=a%2;
    a=Math.floor(a/2);
    no+=(help*i);

    help=(help*10);

}
console.log(no);

}
fun(5);