
function submitForm(event) {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let repeatPassword = document.getElementById("repeatPassword").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let country = document.getElementById("country").value;
    if (userName.length < 5) {
        fixUserName(); {
            if (password.length < 6) {
                fixPassword(); {
                    if (password !== repeatPassword) {
                        matchPasswords(); {
                            if (country !== "Israel" && country !== "USA") {
                                wrongCountry(); {
                                    if (phoneNumber.length > 15) {
                                        fixPhone();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }
    else {
        alert(greetings());
    }

}


function fixUserName() {
    var form = document.getElementById('form');
    var userNameAlert = document.createTextNode("Your user name got to have 5 characters or more!");
    var div = document.createElement('div');
    div.appendChild(userNameAlert);
    form.appendChild(div);  
}

function fixPassword() {
    var form = document.getElementById('form');
    var passwordAlert = document.createTextNode("Your password got to have 6 characters or more!");
    var div = document.createElement('div');
    div.appendChild(passwordAlert);
    form.appendChild(div);
}

function matchPasswords() {
    var form = document.getElementById('form');
    var matchPasswords = document.createTextNode("Your passwords are not the same!");
    var div = document.createElement('div');
    div.appendChild(matchPasswords);
    form.appendChild(div);
}

function wrongCountry() {
    var form = document.getElementById('form');
    var wrongCountry = document.createTextNode("You are not from the right country!");
    var div = document.createElement('div');
    div.appendChild(wrongCountry);
    form.appendChild(div);
}

function fixPhone() {
    var form = document.getElementById('form');
    var fixPhone = document.createTextNode("You phone number can't be more than 15 characters!");
    var div = document.createElement('div');
    div.appendChild(fixPhone);
    form.appendChild(div);
}

function greetings(){
    var green = "Greetings " + userName + ", now you are our friend";
    var green = document.getElementById('welcome');
    document.getElementById('welcome').style.color = 'green';
return (green);
}