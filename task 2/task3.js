            
function myFun()
{
            
            var n = document.getElementById("demo").value;
            var var_name = 'abcd';
            this[var_name] = n;
            console.log(this[var_name]);
            console.log(var_name);
}
            