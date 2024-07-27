var a = document.getElementById("bulb");
var btn = document.getElementById("button");
var flag=0

btn.addEventListener("click", function(){
    if(flag==0){
    a.style.backgroundColor = "yellow";
    btn.innerHTML = ("off");
    flag=1
    }
    else{
        a.style.backgroundColor = "white";
        btn.innerHTML = ("on");
        flag = 0
    }
});
