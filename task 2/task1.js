function Datee()
{
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    
    var x= month + "-" + day + "-" + year ;
    var y=document.createTextNode(x);
    document.getElementById("demo").appendChild(y);
    y=document.createElement("br");
    document.getElementById("demo").appendChild(y);
    
    x= month + "/" + day + "/" + year;
    y=document.createTextNode(x);
    document.getElementById("demo").appendChild(y);
    y=document.createElement("br");
    document.getElementById("demo").appendChild(y);
    
    x= day + "-" + month + "-" + year;
    y=document.createTextNode(x);
    document.getElementById("demo").appendChild(y);
    y=document.createElement("br");
    document.getElementById("demo").appendChild(y);
    
    x= day + "/" + month + "/" + year;
    y=document.createTextNode(x);
    document.getElementById("demo").appendChild(y);
}