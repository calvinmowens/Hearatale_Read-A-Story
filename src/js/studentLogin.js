
// button.addEventListener('click', input);

// function input() {
//     //var tbInput = document.getElementById("tbInput”);
//     tbInput.value = tbInput.value + e.value;
// }

//let test = prompt("hello");

// document.getElementById("B").addEventListener("click", function () {
//     document.getElementById("passwordInput2").innerHTML = test;
//     document.getElementById("passwordInput2").style.color = "black";
// });

var count = 0;

function myFunction(e) {
  console.log(e);
  var myKey = true;
  // var myKey2 = true;
  // var myKey3 = true;
  // var myKey4 = true;
  // var myKey5 = true;


  // if (passwordInput1.value == '') {
  // 	document.getElementById("passwordInput1").value = e;
  // 	myKey1 = false;
  // }


  // if (passwordInput1.value != '' && myKey1) {
  // 	console.log('testttt');
  // 	document.getElementById("passwordInput2").value = e;
  // 	myKey2 = false;
  // }


  // if (passwordInput3.value == '' && myKey1 && myKey2) {
  // 	document.getElementById("passwordInput3").value = e;
  // 	myKey3 = false;
  // }

  if (passwordInput1.value == '') {
  	document.getElementById("passwordInput1").value = e;
  	myKey = false;
  	count++;
  	console.log(count);
  }


  if (passwordInput1.value != '' && myKey && count == 1) {
  	console.log('testttt');
  	document.getElementById("passwordInput2").value = e;
  	myKey = false;
  	count++;
  	console.log(count);
  }

  if (passwordInput2.value != '' && myKey && count == 2) {
  	console.log('testttt');
  	document.getElementById("passwordInput3").value = e;
  	myKey = false;
  	count++;
  	console.log(count);
  }

  if (passwordInput3.value != '' && myKey && count == 3) {
  	console.log('testttt');
  	document.getElementById("passwordInput4").value = e;
  	myKey = false;
  	count++;
  	console.log(count);
  }

  if (passwordInput4.value != '' && myKey && count == 4) {
  	console.log('testttt');
  	document.getElementById("passwordInput5").value = e;
  	myKey = false;
  	count++;
  	console.log(count);
  }


}


function verifyLogin() {
	console.log("Password validation");
	if (passwordInput1.value == '' || passwordInput2.value == '' || passwordInput3.value == '' || passwordInput4.value == '' || passwordInput5.value == '') {
		// TODO set to empty and return
		console.log("One box empty!");
		passwordInput1.value = '';
		passwordInput2.value = '';
		passwordInput3.value = '';
		passwordInput4.value = '';
		passwordInput5.value = '';
		count = 0;

		alert("Please enter a 5-digit passcode.");
	} else {
		console.log("Passcode is full... attempting POST request.");

		let pass = passwordInput1.value + passwordInput2.value + passwordInput3.value + passwordInput4.value + passwordInput5.value;
		let data = { password: pass }
		console.log(pass);

		if (passwordInput1.value == 'C' && passwordInput2.value == 'C' && passwordInput3.value == 'C'
		 && passwordInput4.value == 'C' && passwordInput5.value == 'C') {
			location.href = "bookshelf.html";
		 }

		// fetch('http://localhost:5000/student/login', {
		// 		method: 'POST', // or 'PUT'
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			'Access-Control-Allow-Origin': '*'
		// 		},
		// 		body: JSON.stringify(data)
		// 	})
		// 	.then(response => response.json())
		// 	.then(data => {
		// 		console.log('Success:', data);
		// 		console.log(data);
		// 		console.log(data.msg);
		// 		if (data.msg == "Bad password") {
		// 			passwordInput1.value = '';
		// 			passwordInput2.value = '';
		// 			passwordInput3.value = '';
		// 			passwordInput4.value = '';
		// 			passwordInput5.value = '';
		// 			count = 0;

		// 			alert("User not found.");
		// 		} else {
		//			TODO pass in user object here
		// 			location.href = "bookshelf.html";
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		console.error('Error:', error);
		// 		passwordInput1.value = '';
		// 		passwordInput2.value = '';
		// 		passwordInput3.value = '';
		// 		passwordInput4.value = '';
		// 		passwordInput5.value = '';
		// 		count = 0;

		// 		alert("API Failure, contact admin.");
		// 	});
	}


	// if (passwordInput1.value == 'C' && passwordInput2.value == 'C' && passwordInput3.value == 'C'
	// 	 && passwordInput4.value == 'C' && passwordInput5.value == 'C') {

	// 	console.log("verified");

	// } else {
	// 	passwordInput1.value = '';
	// 	passwordInput2.value = '';
	// 	passwordInput3.value = '';
	// 	passwordInput4.value = '';
	// 	passwordInput5.value = '';
	// 	count = 0;

	// 	//******************************ADD POPUP FOR WRONG PASSWORD HEREEEE*******************************************
	// 	alert("Wrong password entered, please enter correct password.");
	// }
}

