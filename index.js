//saya taruh diatas agar website nya tidak ter refresh setelah selesai mengkalkulasi
var form = document.getElementById("form");

//Fungsi untuk mereset kolom
function handleForm(event) { 
	calculateBMI()
	event.preventDefault(); } 

//fungsi untuk mereset "BMI mu adalah" tapi belum bisa
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
	let categoryArea = document.querySelector(".comment");
	const result = document.getElementById("result");
	// Check apakah input sudah benar
	if (isNaN(weight) || isNaN(height) || gender === "") {
		alert("Please enter valid input values.");
		return false;
	}
	
	// Convert tinggi ke meter
	height /= 100;
	
	// Kalkulasi BMI/rumusnya
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
		// Klasifikasi berat badan (not working)
		categoryArea.style.display = "block";
		document.querySelector(".comment").innerHTML = `You are <span id="comment">${category}</span>`;
		document.querySelector("#category").innerHTML = bmi.toFixed(2);
			
	} else{
	}
	// Alert untuk menampilkan hasil BMI
	alert(category)
	result.innerHTML = bmi;
	return false
}