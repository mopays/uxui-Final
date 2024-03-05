function checkPass() {
		let password = document.getElementById("password");
		let power = document.getElementById("power-point");
	
		let point = 0;
		let value = password.value;
		let widthPower = ["1%", "50%", "100%"];
		let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];
	
		if (value.length >= 6) {
			let arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
			arrayTest.forEach((item) => {
				if (item.test(value)) {
					point += 1;
				}
			});
		}
		power.style.width = widthPower[point];
		power.style.backgroundColor = colorPower[point];
	
		let result;
		let style = "";
		if (colorPower[point] == colorPower[0]) {
			result = "<span style='color:white;'>ความยากของรหัสผ่าน: </span><span style='color: yellow;'>รหัสมีความปลอดภัยต่ำ</span>";
			style = "color: red;";
		} else if (colorPower[point] == colorPower[1] ) {
			result = "<span style='color:white;'>ความยากของรหัสผ่าน: <span style='color: blue; '>รหัสมีความปลอดความปลอดภัยปานกลาง</span></span>";
		} else {
			result = "<span style='color:white;'>ความยากของรหัสผ่าน: <span style='color: #5dff12;'>รหัสมีความปลอดภัยสูง</span></span>";
		}
	
		document.getElementById("result").innerHTML = result;
	}