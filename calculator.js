function disp ( val ){
    document.getElementById("display").value+=val;
}
function sum (){
    var x=document.getElementById("display").value;
    var y=eval(x);
    document.getElementById("display").value=y;
}
function clr(){
    document.getElementById("display").value=" ";
}