var d,hour,min,sec,time,color;

function abc(){
    d=new Date();
    hour=d.getHours();
    min=d.getMinutes();
    sec=d.getSeconds();
    
    if(hour<10){
        hour="0"+hour;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+sec;
    }
    color= "#"+hour+min+sec;
    time = hour+" : "+min+" : "+sec;
    document.getElementById("test").innerHTML=time;
    document.body.style.background=color;
    setTimeout(abc,1000);
    
    
}
abc();