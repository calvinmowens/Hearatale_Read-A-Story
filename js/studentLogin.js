
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
	if (passwordInput1.value == 'C' && passwordInput2.value == 'C' && passwordInput3.value == 'C'
		 && passwordInput4.value == 'C' && passwordInput5.value == 'C') {

		console.log("verified");
		location.href = "bookshelf.html";

	} else {
		passwordInput1.value = '';
		passwordInput2.value = '';
		passwordInput3.value = '';
		passwordInput4.value = '';
		passwordInput5.value = '';

		//******************************ADD POPUP FOR WRONG PASSWORD HEREEEE*******************************************
		alert("Wrong password entered, please enter correct password.");
	}
}

