"use strict";

// console.log(prompt("Ismimginzi kiriting"));
// console.log(prompt("Familiyangizni kiriting"));
// console.log(prompt("Adresingnizni kiriting kiriting"));
// console.log(prompt("Telefon raqamingizni kiriting"));
// console.log(prompt("Email adresingizni kiriting"));
// console.log(prompt("Yoshingizni kiriting kiriting"));
// console.log(prompt("Jinsingizni kiriting"));
// console.log(prompt("Yoqtirgan rangingizni kiriting"));

// let ism = prompt("ismingizni kiriting");
// let familiya = prompt("familiyangizni kiriting");
// let adres = prompt("Adresingizni kiriting");
// let kasb = prompt("Kasbingizni kiriting");
// let maktab = prompt("O'qigan maktabingizni kiriting");
// let tugJoy = prompt("Tug'ilgan joyingizni kiriting");
// let univer = prompt("Oqigan universitetingizni kiriting");

// console.log(
//   `Mening ismim ${ism} familiyam ${familiya}. ${tugJoy} da tugilganman. ${maktab} da tahsil olganman,  Hozirgi kunda ${adres}da yashayapman. ${univer} ni tamomlaganman, kasbim ${kasb}.  Tanishganimdan hursandman`
// );



const aviaBilet = 500;
const hotel = 250;
const museums = 120; //yevro

const jamiHarajat =
  aviaBilet * 10650.34 + hotel * 10650.34 + museums * 11650.03;

const sum = prompt("Qancha pulingiz borligini kiriting ");

console.log(
  `Sizning ${sum} so'm pulimgiz bor. Sayoht uchun jami harajat esa ${jamiHarajat} ni tashkil etadi`
);
