	// saya taruh diatas agar website nya tidak ter refresh setelah selesai mengkalkulasi
var form = document.getElementById("form");

	// Fungsi untuk mereset kolom
function handleForm(event) { 
	event.preventDefault();  
	calculateBMI(); }


	// Fungsi untuk mereset "BMI mu adalah" tapi belum bisa
function refreshPage(){
    window.location.reload();
} 
	//  function resetBMI(event){
	// 	var result = document.getElementsByClassName("result");
	// 	result.innerHTML="00.00"
	// 	event.preventDefault();
	// }
	// 	if(form){ 
	// 	form.addEventListener('submit', handleForm);
	// 	form.addEventListener('reset', resetBMI);
	// 	}

	//Fungsi kalkulasi
function calculateBMI() {
	// Get input values
	var weight = parseFloat(document.getElementById("weight").value);
	var height = parseFloat(document.getElementById("height").value);
	var gender = document.getElementById("gender").value;
	let resultArea = document.querySelector(".comment", ".comment2");
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
	let category = '';
	if(gender === "male"){
	
		if(bmi<18.5){
		 category = 'Kekurangan berat badan !';
		 explain = 'Kamu berada dalam kategori overweight atau berat badan berlebih Cara terbaik untuk menurunkan berat badan dengan mengatur kalori makan yang dikonsumsi dan berolahraga Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal'
		  }else if (bmi < 24.9){
		 category = 'Normal/Ideal !';
		 explain = 'Kamu berada dalam kategori normal atau berat badan ideal, Tetap jaga berat badan-mu dengan menjaga kalori dan berolahraga.'
		  }else if (bmi < 29.9){
		 category = 'Kelebihan berat badan !';
		 explain = 'Kamu berada dalam kategori overweight atau berat badan berlebih Cara terbaik untuk menurunkan berat badan dengan mengatur kalori makan yang dikonsumsi dan berolahraga Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal'
		  }else if (bmi > 30.0){
		 category = 'Obesitas !';
		 explain = 'Kamu berada dalam kategori overweight atau berat badan berlebih Cara terbaik untuk menurunkan berat badan dengan mengatur kalori makan yang dikonsumsi dan berolahraga Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal'
		  }
		
	}else if(gender === "female"){
	
		if(bmi<18.5){
		 category = 'Kekurangan berat badan !';
		 explain = 'Kamu berada dalam kategori overweight atau berat badan berlebih Cara terbaik untuk menurunkan berat badan dengan mengatur kalori makan yang dikonsumsi dan berolahraga Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal'
		  }else if (bmi < 24.9){
		 category = 'Normal/Ideal !';
		 explain = 'Kamu berada dalam kategori normal atau berat badan ideal, Tetap jaga berat badan-mu dengan menjaga kalori dan berolahraga.'
		  }else if (bmi < 29.9){
		 category = 'Kelebihan berat badan !';
		 explain = 'Kamu berada dalam kategori kelebihan berat badan Cara terbaik untuk menurunkan berat badan dengan mengatur kalori makan yang dikonsumsi dan berolahraga Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal'
		  }else if (bmi > 30.0){
		 category = 'Obesitas !';
		 explain = 'Kamu berada dalam kategori overweight atau berat badan berlebih Cara terbaik untuk menurunkan berat badan dengan mengatur kalori makan yang dikonsumsi dan berolahraga Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal'
		  }
	}
	// Alert untuk menampilkan hasil BMI
	result.innerHTML = bmi;
	resultArea.style.display = "block";
	document.querySelector(".comment").innerHTML = `Kamu <span id="comment">${category}</span>`;
	document.querySelector(".comment2").innerHTML = `<span id="comment2">${explain}</span>`;
	document.querySelector("#result").innerHTML = bmi;

	// Menampilkan .form2 atau hideBMI column
	document.getElementById("form2").classList.remove("hide-columnbmi");

}