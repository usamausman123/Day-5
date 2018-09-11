function Sort()
{
    
    var arr = [5,10,15,25];
    var x="";
    var y="";
    var j=0;
    for(var i =0 ; i<arr.length;i++)
    {
        j=0;
        while(j<arr.length)
       {
        if(i != j)
        {
            if(arr[i] % arr[j]==0)
            {
                x= "(" + arr[j] + "," + arr[i] +  ") , " ;
                y=document.createTextNode(x);
                document.getElementById("demo").appendChild(y);
                //document.write("hello");
            }
            
        }
           j++;
       }
        
    }
}