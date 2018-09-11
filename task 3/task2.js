function add() 
{
            var x1 = document.getElementById("name").value;
            var x3 = document.getElementById("price").value;
            if(x1== "" || x3=="")
            {
                    swal("DEAD","Please fill the fields!","warning");
            }
            
            else{
                
            var table=document.getElementById("b");
            var newRow = table.insertRow(table.rows.length);
            var cel1 = newRow.insertCell(0);
            var cel2 = newRow.insertCell(1);
            cel2.setAttribute("contenteditable","true");
            
            var rIndex = table.rows.length;
            table.rows[rIndex-1].cells[0].innerHTML = document.getElementById("name").value;
            table.rows[rIndex-1].cells[1].innerHTML = document.getElementById("price").value;
            if(rIndex > 2)
            {
                table.rows[rIndex-1].cells[1].innerHTML =  parseFloat(newRow.lastChild.innerHTML) + parseFloat(newRow.previousSibling.lastChild.innerHTML); //+ parseFloat(table.lastChild.lastChild.innerHTML);
            }
                
            
             
            /*var tab=document.getElementById("b");
            var subtotal=0.0;
            var tax=0.0;
            var total=0.0;
            for(var i = 1; i < tab.rows.length; i++)
            {
                subtotal  = subtotal + parseFloat(tab.rows[i].cells[3].innerHTML);
                tax= subtotal*0.1;
                total=tax+subtotal;
                document.getElementById("t1").value= subtotal;
                document.getElementById("t2").value= tax;
                document.getElementById("t3").value= total;
                
            }
            document.getElementById("name").value="";
            document.getElementById("quantity").value="";
            document.getElementById("price").value="";
          */  
         }
        }
