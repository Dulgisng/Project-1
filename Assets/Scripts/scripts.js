var firstname = "Dulguun";
var lastname = "Sandagsuren";

function displayName() {
	console.log("Display info on page");
	var message = "The users name is: ";
	var fullname = firstname + " " + lastname;
	
	message = message + fullname;
	
	document.write(message);
}



function validation(){
	var name = document.getElementById("name").value;
	var subject = document.getElementById("subject").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message").value;
	var text;
	
	error_message.style.padding = "10px";
	
	if(name.length <5){
		text = "Sorry, please enter a valid name!"
		error_message.innerHTML = text;
		return false;
	
}

	if(subject.length <10){
		text = "Sorry, please enter a valid subject!"
		error_message.innerHTML = text;
		return false;
	
}

	if(isNaN(phone)|| phone.length != 10){
		text = "Sorry, please enter a valid phone number!"
		error_message.innerHTML = text;
		return false;
	
}

	if(email.indexOf("@") == -1 || email.length < 6){
		text = "Sorry, please enter a valid an email!"
		error_message.innerHTML = text;
		return false;
	
}

	if(message.length <= 140){
		text = "Sorry, please enter more than 100 characters"
		error_message.innerHTML = text;
		return false;
	
}

	alert("Thank you your form has been successfully submitted!")
	return true;
}