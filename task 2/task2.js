function Area(a,b,c)
{
    var p, area;
     p = (a + b + c )/2;
     area = p*(p-a)*(p-b)*(p-c);
     document.getElementById("demo").innerHTML = Math.sqrt(area);
}