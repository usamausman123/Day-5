function fun() {
    
        var node = document.createElement("h1");
        var textnode = document.createTextNode("I am an Hi");
        node.appendChild(textnode);
        document.getElementById("parent").appendChild(node);
    
        node = document.createElement("h4");
        textnode = document.createTextNode("This is a paragraph followed by a list");
        node.appendChild(textnode);
        document.getElementById("parent").appendChild(node);
    
        var unOrder = document.createElement("ul");
        unOrder.setAttribute("id","b");
        var list = document.createElement("li");
        var x1 = document.createTextNode("This is first");
        list.appendChild(x1);
        unOrder.appendChild(list);
    
        list = document.createElement("li");
        x1 = document.createTextNode("This is second");
        list.appendChild(x1);
        unOrder.appendChild(list);
        document.getElementById("parent").appendChild(unOrder);
}




function myFu() {
    var x=document.getElementById("a").value;
    if(x=="")
       {
            alert("Please enter something!");
       }
    else{
        var node = document.createElement("li");
        var textnode = document.createTextNode(x);
        node.appendChild(textnode);
        document.getElementById("b").appendChild(node);
    }
}