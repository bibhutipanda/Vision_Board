let x,pre;
let id;
for(id=1;id<=36;id++)
    {
    pre=x;
    while(x==pre)
    x=Math.floor(Math.random()*10000000)%26+1;
    document.getElementById(id).innerHTML=String.fromCharCode(x+64);
    }
