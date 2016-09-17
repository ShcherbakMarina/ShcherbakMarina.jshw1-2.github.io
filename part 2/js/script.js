var nameArr = [];
var verifArr =[];
var warnMessage = "Name can't be empty or be a number. Try again";
var userName;
var flag = 0;
var i;

for (i = 0; i < 5; i++) {
  nameArr[i] = prompt('Enter some name:');
  verifArr[i] = Number(nameArr[i]);
  if (verificationNumEmpty(verifArr[i])) {
    i--;
  }
}

do {
  userName = prompt('Enter your name:');
} while (verificationNumEmpty(userName));

for (i = 0; i < nameArr.length; i++) {
  if (nameArr[i] == userName) flag++;
}

if (flag) {
  alert(userName + ', вы успешно вошли!');
} else {
  alert('такого имени нет в массиве');
}



function verificationNumEmpty(a) {
  if (!(isNaN(a))) {
    alert(warnMessage);
    return true;
  }
}
