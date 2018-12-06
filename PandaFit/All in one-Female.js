<!DOCTYPE html>
<html>
<head>

<title> BodyFat Calculator</title>

<script type="text/javascript">


function BFwomen() {
//用户数据变量定义
var age = parseInt(document.getElementById("ageBox").value, 10);
var fheight = parseInt(document.getElementById("fheightBox").value, 10);
var iheight = parseInt(document.getElementById("iheightBox").value, 10);
var weight = parseInt(document.getElementById("weightBox").value, 10);
var waist = parseInt(document.getElementById("waistBox").value, 10);
var wrist = parseInt(document.getElementById("wristBox").value, 10);
var hip = parseInt(document.getElementById("hipBox").value, 10);
var forearm = parseInt(document.getElementById("forearmBox").value, 10);
var age = parseInt(document.getElementById("ageBox").value, 10);

//体脂类型变量定义
var ftype;
//BMI类型变量定义
var btype;

//BMI计算器
var BMI = ((weight/((fheight * 12+ iheight)*(fheight * 12+ iheight)))*703).toFixed(2);

//BodyFat计算器
var fig1= weight * 0.732 + 8.987;   
var fig2= wrist / 3.14;
var fig3= waist * 0.157;
var fig4= hip * 0.249;
var fig5= forearm * 0.434;
var LBM = fig1+ fig2- fig3- fig4+ fig5;
var BFW = weight - LBM;
var BFP = (BFW * 100/ weight).toFixed(2); 

//BodyFat结果输出
document.getElementById("bodyfatBox").value = BFP;

//BMI结果输出
document.getElementById("bmiBox").value = BMI;

//BMI类型判定
if (BMI < 18.5)
    {
      btype="Underweight";
    }
    else if (BMI>= 18.5 && BMI < 25)
    {
     btype="Normal";
    }
    else if (BMI>= 25 && BMI< 30)
    {
      btype="Overweight";
    }
    else if (BMI >= 30)
    {
      btype="Obese";
    }
    document.getElementById("btypeBox").value = btype;

//体脂类型判定
if(age >= 18 && age <= 20 )
{
    if (BFP < 17.7 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 17.7 && BFP < 23.2 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 23.2 && BFP <= 26.7 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 26.7 && BFP < 30.2 )
        {
        ftype="AVERAGE PLUS";
        }
    else if (BFP >= 30.2 )
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }


if (age >= 21 && age <= 25 )
{
    if (BFP < 20.3 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 20.3 && BFP < 25.5 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 25.5 && BFP <= 28.15 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 28.15 && BFP < 30.8 )
    {
    ftype="AVERAGE PLUS";
    }
    else if (BFP >= 30.8)
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }
    
if (age >= 26 && age<=30 )
{
    if (BFP < 20.9 ) 
    {
        ftype = "LEAN";
    } else if (BFP >= 20.9 && BFP < 26.1 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 26.1 && BFP <= 29.3 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP >29.3 && BFP < 32.5 )
    {
        ftype ="AVERAGE PLUS";
    }
    else if (BFP >= 32.5)
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }

if (age >= 31 && age <= 35 )
{
    if (BFP < 21.5 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 21.5 && BFP < 26.7 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 26.7 && BFP <= 29.95 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 29.95 && BFP < 33.2 )
    {
        ftype ="AVERAGE PLUS";
    }
    else if (BFP >= 33.2)
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }

if (age >= 36 && age <= 40 )
{
    if (BFP < 24 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 24 && BFP < 28.8 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 28.8 && BFP < 31.3 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 31.3 && BFP < 33.8 )
    {
        ftype ="AVERAGE PLUS";
    }
    else if (BFP >= 33.8)
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }
    
if (age >= 41 && age <= 45 )
{
    if (BFP < 24.6 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 24.6 && BFP < 29.4 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 29.4 && BFP <= 32.4 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 32.4 && BFP < 35.4 )
    {
        ftype ="AVERAGE PLUS";
    }
    else if (BFP >= 35.4)
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }

if (age >= 46 && age <= 50 )
{
    if (BFP < 25.2 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 25.2 && BFP < 30.1 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 30.1 && BFP <= 33.05 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 33.05 && BFP < 36 )
    {
        ftype ="AVERAGE PLUS";
    }
    else if (BFP >= 36)
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }    
    
if (age >= 51 && age <= 55 )
{
    if (BFP < 25.9 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 25.9 && BFP < 30.7 )  
    {
        ftype ="IDEAL";
    }
    else if (BFP >= 30.7 && BFP <= 33.65 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 33.65 && BFP < 36.6 )
    {
        ftype ="AVERAGE PLUS";
    }
    else if (BFP >= 36.6)
    {
        ftype ="ABOVE AVERAGE";
    }
    
    }

if (age >= 56 )
{
    if (BFP < 26.5 ) 
    {
        ftype = "LEAN";
    } 
    else if (BFP >= 26.5 && BFP < 31.3 )  
    { 
        ftype ="IDEAL";
    }
    else if (BFP >= 31.3 && BFP <= 34.7 )
    {
        ftype ="AVERAGE MINUS";
    }
    else if (BFP > 34.7 && BFP < 38.1 )
    {
        ftype ="AVERAGE PLUS";
    }
    else if (BFP >= 38.1)
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
Wrist measurement: <input type="text" id="wristBox" size="4" value=""> inches
<br>
Hip measurement: <input type="text" id="hipBox" size="4" value="" > inches
<br>
Forearm measurement: <input type="text" id="forearmBox" size="4" value="" > inches
<br>
<input type="button" value="Calculate" onclick="BFwomen();">
<br>
Your BodyFat is <input type="text" id="bodyfatBox" size="4" value=""> %
<br>
Your BMI is <input type="text" id="bmiBox" size="4" value="">
<br>
Your BMI Type is <input type="text" id="btypeBox" size="13" value="">
<br>
Your Body Fat Type is <input type="text" id="ftypeBox" size="15" value="">



</body>
</html>