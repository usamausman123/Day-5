function myFn()
{
    document.getElementById("b").setAttribute("style","background-color:blue;");
    var x=document.createElement("h1");
    x.setAttribute("style","color:red;");
    var y=document.createTextNode("So long 130");
    x.appendChild(y);
    document.getElementById("bel").appendChild(x);

    
    
}