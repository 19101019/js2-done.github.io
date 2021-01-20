<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

        <style>
        #entries,#results{float:left;
    margin-top: 5%;    
   margin-left: 15%;
color: rgb(1, 77, 24);
    font-size: 20px;
    line-height: 32px;
    font-family:'Times New Roman', Times, serif;
        
        
        
        
        }
       
form{
    padding: 5px 35px;width: 100%;
    margin-top: 15%;
   border: 1px solid rgb(8, 4, 253) ;
color: rgb(1, 77, 24);
    font-size: 25px;
    line-height: 32px;
    font-family:'Times New Roman', Times, serif;
   border-radius:10%; background-color: rgb(220, 250, 220);
}


.ji{
    margin-left: 180%;
}

        </style> 
   
       

    <body>
       
        <div id="entries">
        <form name ="myform">
        Enter  First name: <input type="text" name="nm"/><br>
        Enter second name: <input type="text" name="sn"/><br>
        Enter Age: <input type="text" name="ag"/><br>
        Enter Blood group: <input type="text" name="bg"/><br>
        Enter Gender: <input type="text" name="g"/><br>
     
<input type="button" value="display" onclick="collect(this.form)" />
        </form><img src="yjk.png" class="ji">
        </div>

        <div id="results">

        <script type="text/javascript">
        function collect(frm) { 
        document.getElementById("results").innerHTML+="First Name: "+frm.nm.value+"<br>Second Name: "+frm.sn.value+"<br>Age: "+frm.ag.value+"<br>Blood group: "+frm.bg.value+"<br>Gender: "+frm.g.value+"<hr>"
        } 
        </script></div>
</body>
</html>