
function showDescription(descript){
	$("#description").html("Description: " + descript);
}

function hideDescription(){
	$("#description").html(" "); 
}


// Checks the validity of the zip code in the contact form 
function validate(){
	var zip = $("#zipcode").val(); 
	if (zip.length != 5 || isNaN(zip)){
		alert("Zip Code is not valid or not in a valid format.");
		return false;
	}
}