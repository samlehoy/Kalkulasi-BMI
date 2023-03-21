	var form = document.getElementById("form");

//Fungsi untuk mereset kolom
function handleForm(event) { 
	calculateBMI()
	event.preventDefault(); } 

//fungsi untuk mereset "BMI mu adalah" tapi gk bisa
function resetBMI(event){
	result.innerHTML="00.00"
	event.preventDefault();
	const result = document.getElementById("result");
}
	form.addEventListener('submit', handleForm);
	form.addEventListener('reset', resetBMI);

function calculateBMI() {
	// Get input values
	let weight = parseFloat(document.getElementById("weight").value);
	let height = parseFloat(document.getElementById("height").value);
	let gender = document.getElementById("gender").value;
	const result = document.getElementById("result");
	// Check apakah input sudah benar
	if (isNaN(weight) || isNaN(height) || gender === "") {
		alert("Please enter valid input values.");
		return false;
	}
	
	// Convert tinggi ke meter
	height /= 100;
	
	// Kalkulasi BMI
	let bmi = weight / (height * height);
	
	// Membulatkan hasil BMI menjadi 2 angka desimal dibelakang koma
	bmi = bmi.toFixed(2);
	
	// Menentukan kategori BMI berdasarkan gender
	let category;
	if (gender === "male") {
	
		if (bmi < 20.7) {
			category = "Underweight";
		} else if (bmi < 26.4) {
			category = "Normal";
		}
	} else 	if (gender === "female") {
	
		if (bmi < 20.7) {
			category = "Underweight";
		} else if (bmi < 26.4) {
			category = "Normal";
		}
	} else{
	}
	// Alert untuk menampilkan hasil BMI
	alert(bmi)
	result.innerHTML = bmi;
	return false
}