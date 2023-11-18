
function displayStateAndFlower(){
	let selectedState = document.getElementById("stateSelect").value;
	
	let stateFlowers = {
		"california": "California Poppy",
		"new York": "Rose",
		"georgia": "Cherokee Rose",
		"arizona": "Saguaro Cactus Bloom",
		"north Carolina": "Dogwood"
	};
	
	let resultDiv = document.getElementById("result");
	resultDiv.innerHTML = "State: " + selectedState.charAt(0).toUpperCase() + selectedState.slice(1) + "<br>" +
							"State Flower: " + stateFlowers[selectedState];
							
							
							
}

function validateEmail(){
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  const $result = $('#result');
  const email = $('#email').val();
  $result.text('');

  if(validateEmail(email)){
    $result.text(email + ' is valid.');
    $result.css('color', 'green');
  } else{
    $result.text(email + ' is invalid.');
    $result.css('color', 'red');
  }
  return false;
}

$('#email').on('input', validate);
}