function pal()
{
    var x=document.getElementById("demo").value;
    
    var k=0;
    var j=x.length-1;
    
    for (var i=0;i<x.length;i++)
    {
        if(x[k]==x[j])
        {
                k++;
                j--;
        }
        else
        {
            alert("Given string is not pallindrom!");
            break;
        }
        
        if( k==j || k > j)
        {
            document.getElementById("demo").value="pallindrom";
        }
            
    }
}