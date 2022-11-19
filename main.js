"use strict";

let ism = prompt("Ismingizni kiriting");
let yosh = +prompt(`${ism} aka yoshiz nechchida edi`);
if (yosh > 18) {
  {
    alert(`${ism} aka bemalol prava olishiz mumkin ekankuuu`);
  }
} else {
  alert(`Bratishka hali yosh bolekansanu, hali senga ${18 - yosh} yil bor`);
}

let a = prompt("1-sonni kiriting"),
  b = prompt("2-sonni kiriting"),
  c = prompt("3-sonni kiriting");

if ((a > b, a > c)) {
  alert(`a soni eng katta ${a}`);
} else if ((b > c, b > a)) {
  alert(`b soni eng katta ${b}`);
} else if ((c > a, c > b)) {
  alert(`c soni eng katta ${c}`);
} else if ((a = b = c)) {
  alert(`bu sonlar teng`);
}
