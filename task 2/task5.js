function rotate()
{
    var arr = [15,20,25];
    var x=arr[0];
    arr.shift();
    arr.push(x);
    document.getElementById("demo").value=arr;
    
}