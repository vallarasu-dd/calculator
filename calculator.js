let result=document.getElementById("calc");

        function sum(num)
        {
            result.value += num;
        }
        function disp(){
            try{
                result.value=eval(result.value);

            }
            catch(err){
                alert("invalid")
            }
        }
        function clr()
        {
            result.value="";
        }

        function del(){
            result.value=result.value.slice(0,-1);
        }