<!DOCTYPE html>
<html>
<head>

<title> BFP Calculator</title>

<script type="text/javascript">


function BFmen() {
//用户数据变量定义
var age = parseInt(document.getElementById("ageBox").value, 10);
var fheight = parseInt(document.getElementById("fheightBox").value, 10);
var iheight = parseInt(document.getElementById("iheightBox").value, 10);
var weight = parseInt(document.getElementById("weightBox").value, 10);
var waist = parseInt(document.getElementById("waistBox").value, 10);


//体脂类型变量定义
var ftype;
//BMI类型变量定义
var btype;

//BMI计算器
var BMI = ((weight/((fheight * 12+ iheight)*(fheight * 12+ iheight)))*703).toFixed(2);

//BFP计算器
var fig1= weight * 1.082 + 94.42;   
var fig2= waist * 4.15;
var LBM= fig1- fig2;
var BFW= weight - LBM;
var BFP= (BFW* 100/ weight).toFixed(2);  
//BFP结果输出
document.getElementById("BFPBox").value = BFP;



//BMI结果输出
document.getElementById("bmiBox").value = BMI;

//BMI类型判定
if (BMI < 18.5)
    {
      btype="UNDERWEIGHT";
    }
    else if (BMI>= 18.5 && BMI < 25)
    {
     btype="NORMAL";
    }
    else if (BMI>= 25 && BMI< 30)
    {
      btype="OVERWEIGHT";
    }
    else if (BMI >= 30)
    {
      btype="OBESE";
    }
    document.getElementById("btypeBox").value = btype;

//体脂类型判定
if(age >= 18 && age <= 20 )
{
    if (BFP < 6.2 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 6.2 && BFP < 14.3 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 14.3 && BFP <= 17.25 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 17.25 && BFP < 20.2 )
        {
        ftype="AVERAGE PLUS";
        }
    else if (BFP >= 20.2 )
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }


if (age >= 21 && age <= 25 )
{
    if (BFP < 7.3 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 7.3 && BFP < 15.4 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 15.4 && BFP <= 18.85 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 18.85 && BFP < 22.3 )
    {
    ftype="AVERAGE PLUS";
    }
    else if (BFP >= 22.3)
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }
    
if (age >= 26 && age<=30 )
{
    if (BFP < 10.6 ) 
    {
        ftype = "LEAN";
    } else if (BFP >= 10.6 && BFP < 18.1 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 18.1 && BFP <= 20.75 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP >20.75 && BFP < 23.4 )
    {
        ftype ="AVERAGE PLUS";
    }
    else if (BFP >= 23.4)
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }

if (age >= 31 && age <= 35 )
{
    if (BFP < 11.7 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 11.7 && BFP < 19.2 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 19.2 && BFP <= 21.85 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 21.85 && BFP < 24.5 )
    {
        ftype ="AVERAGE PLUS";
    }
    else if (BFP >= 24.5)
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }

if (age >= 36 && age <= 40 )
{
    if (BFP < 12.7 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 12.7 && BFP< 20.2 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 20.2 && BFP < 22.9 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 20.2 && BFP < 25.6 )
    {
        ftype ="AVERAGE PLUS";
    }
    else if (BFP >= 25.6)
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }
    
if (age >= 41 && age <= 45 )
{
    if (BFP < 15.9 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 15.9 && BFP < 22.8 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 22.8 && BFP <= 25.2 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 25.2 && BFP < 27.6 )
    {
        ftype ="AVERAGE PLUS";
    }
    else if (BFP >= 27.6)
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }

if (age >= 46 && age <= 50 )
{
    if (BFP < 16.9 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 16.9 && BFP < 23.9 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 23.9 && BFP <= 26.3 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 26.3 && BFP < 28.7 )
    {
        ftype ="AVERAGE PLUS";
    }
    else if (BFP >= 28.7)
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }    
    
if (age >= 51 && age <= 55 )
{
    if (BFP < 18 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 18 && BFP < 25 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 25 && BFP <= 27.35 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 27.35 && BFP < 29.7 )
    {
        ftype ="AVERAGE PLUS";
    }
    else if (BFP >= 29.7)
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }

if (age >= 56 )
{
    if (BFP < 19.1 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 10.6 && BFP < 26 )  
    { 
        ftype ="IDEAL";
    }
    else if (BFP >= 26 && BFP <= 28.8 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 28.8 && BFP < 31.6 )
    {
        ftype ="AVERAGE PLUS";
    }
    else if (BFP >= 31.6)
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }
    document.getElementById("ftypeBox").value = ftype;



}
</script>

Age: <input type="text" id="ageBox" size="4" value=""> years old
<br>
Height: <input type="text" id="fheightBox" size="4" value=""> feet <input type="text" id="iheightBox" size="4" value=""> inch
<br>
Weight: <input type="text" id="weightBox" size="4" value=""> pounds
<br>
Waist measurement: <input type="text" id="waistBox" size="4" value="" > inches
<br>
<input type="button" value="Calculate" onclick="BFmen();">
<br>
Your BFP is <input type="text" id="BFPBox" size="4" value=""> %
<br>
Your BMI is <input type="text" id="bmiBox" size="4" value="">
<br>
Your BMI Type is <input type="text" id="btypeBox" size="13" value="">
<br>
Your Body Fat Type is <input type="text" id="ftypeBox" size="15" value="">


</body>
</html>