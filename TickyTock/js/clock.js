var d , h , m , s,clock;
 

function clocky(){
    d= new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    if (h<=9){
        h="0"+h;
    }
    if (m<=9){
        m="0"+m;
    }
    if (s<=9){
        s="0"+s;
    }
    clock=h+":"+m+":"+s;
    document.getElementById("ticky").innerHTML=clock;
    setTimeout(clocky,1000);
    clr="#"+h+m+s;
    document.body.style.background=clr;

}
clocky();