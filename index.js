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
	if(form){
	form.addEventListener('submit', handleForm);
	form.addEventListener('reset', resetBMI);
	}

//Fungsi kalkulasi
function calculateBMI() {
	// Get input values
	var weight = parseFloat(document.getElementById("weight").value);
	var height = parseFloat(document.getElementById("height").value);
	var gender = document.getElementById("gender").value;
	let resultArea = document.querySelector(".comment");
	const result = document.getElementById("result");

	// Check apakah input sudah benar
	if (isNaN(weight) || isNaN(height) || gender === "") {
		alert("Please enter valid input values.");
		modal.style.display = "block";
		modalText.innerHTML = `All fields are required!`;
		return false;
	}

	// Convert tinggi ke meter
	height /= 100;
	
	// Kalkulasi BMI/rumusnya
	let bmi = weight / (height * height);
	
	// Membulatkan hasil BMI menjadi 2 angka desimal dibelakang koma
	bmi = bmi.toFixed(2);
	
	// Menentukan kategori BMI berdasarkan gender
	let category = '';
	if(gender === "male"){
	
		if(bmi<18.5){
		 category = 'Underweight';
		  }else if (bmi < 24.9){
		 category = 'Underweight';
		  }else if (bmi < 29.9){
		 category = 'Underweight';
		  }else if (bmi > 30.0){
		 category = 'Underweight';
		  }
		
	}else if(gender === "female"){
	
		if(bmi<18.5){
		 category = 'Underweight';
		  }else if (bmi < 24.9){
		 category = 'Underweight';
		  }else if (bmi < 29.9){
		 category = 'Underweight';
		  }else if (bmi > 30.0){
		 category = 'Underweight';
		  }

	}
	// Alert untuk menampilkan hasil BMI
	result.innerHTML = bmi;
	resultArea.style.display = "block";
	document.querySelector(".comment").innerHTML = `You are <span id="comment">${category}</span>`;
	document.querySelector("#result").innerHTML = bmi;
	return false


}