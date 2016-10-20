function checkForm(){
	if (document.getElementById("vpwd").value != document.getElementById("pwd").value) {
		alert("Passwords do not match");
	}
	else{
		alert("Congratulations! You have successfully registered.")
		var username= document.getElementById("username");
		var pwd= document.getElementById("pwd");
		var vpwd= document.getElementById("vpwd");
		var email= document.getElementById("email");
		var vemail= document.getElementById("vemail");
		var Q1= document.getElementById("Q1");
		var A1= document.getElementById("ans");
		var Q2= document.getElementById("Q2");
		var A2= document.getElementById("ans");
		var Q3= document.getElementById("Q2");
		var A3= document.getElementById("ans");
		var mob= document.getElementById("mob");
		var add= document.getElementById("add");
	
		localStorage.setItem("username", username.value);
		localStorage.setItem("pwd", pwd.value);
		localStorage.setItem("vpwd", vpwd.value);
		localStorage.setItem("email", email.value);
		localStorage.setItem("vemail", vemail.value);
		localStorage.setItem("Q1", Q1.value);
		localStorage.setItem("A1", ans.value);
		localStorage.setItem("Q2", Q2.value);
		localStorage.setItem("A2", ans.value);
		localStorage.setItem("mobile", mob.value);
		localStorage.setItem("add", add.value);
	
	}
}
