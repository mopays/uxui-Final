function checkPass() {
	let password = document.getElementById("password"); 
	let power = document.getElementById("power-point"); 
 

	let point = 0; 
	let value = password.value; 
	let widthPower =  
		["1%",  "50%", "100%"]; 
	let colorPower =  
		["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"]; 
  
		
	if (value.length >= 6) { 
		let arrayTest =  
			[/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/]; 
		arrayTest.forEach((item) => { 
			if (item.test(value)) { 
				point += 1; 
			} 
		}); 
	} 
	power.style.width = widthPower[point]; 
	power.style.backgroundColor = colorPower[point]; 


    if(colorPower[point] == colorPower[0]){
        result = "รหัสมีความปลอดภัยต่ำ";
    }else if(colorPower[point] == colorPower[1] ){
        result = "รหัสมีความปลอดความปลอดภัยปานกลาง";
    }else{
        result = "รหัสมความปลอดภัยสูง";
    }
	
    document.getElementById("result").innerHTML(result)
}