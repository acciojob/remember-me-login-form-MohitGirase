//your JS code here. If required.

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

window.addEventListener("load", () => {
	const username = localStorage.getItem("username");
	const password = localStorage.getItem("password");

	if(username && password){
		existingBtn.style.display = "block";
	}
});

submitBtn.addEventListener("click", () => {
	const username = usernameInput.value.trim();
	const password = passwordInput.value.trim();

	if(username === "" || password === ""){
		alert("Enter both username and password");
		return;
	}

	alert(`Logged in as ${username}`);
	
	if(checkbox.checked){
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
		existingBtn.style.display = "inline-block";
	}else{
		localStorage.removeItem("username");
        localStorage.removeItem("password");
		existingBtn.style.display = "none";
	}
});

existingBtn.addEventListener("click", () => {
	const savedUsername = localStorage.getItem("username");

	if(savedUsername){
		alert(`Logged in as ${savedUsername}`);
	}
});

